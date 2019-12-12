import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import USERS_API_URL from '../../../constants/USERS_API_URL';
import { AUTH_SUCCESS } from '../../../constants/ACTION_TYPES';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class LoginFormComponent extends Component {
    state = { 
        email:"",
        password:"",
        redirect:false
     }

    onChange = event => {
        const eventTarget = event.target.name;
        const eventValue = event.target.value;
        this.setState({
            [eventTarget]:eventValue
        })
        console.log(this.props.location)
    } 

    // Authentication
    onSubmit = event => {
        event.preventDefault();
        let userWithInputedEmail;
        let userPasswordFromAPIObject;
        axios.get(USERS_API_URL).then(response => {
            userWithInputedEmail = response.data.filter(userObject => {return userObject.email === this.state.email})[0];
            userPasswordFromAPIObject = userWithInputedEmail.password;
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            if(this.state.password ===  userPasswordFromAPIObject){
                this.setState({
                    redirect:true
                })
            }
            
            if(this.state.password ===  userPasswordFromAPIObject && userWithInputedEmail.isSuperUser)
            {
                this.props.dispatch({type:AUTH_SUCCESS, object:{isLoggedIn:true, isSuperUser:true, emailOfUserLoggedIn:userWithInputedEmail.email}})
            }else if (this.state.password ===  userPasswordFromAPIObject){
                this.props.dispatch({type:AUTH_SUCCESS, object:{isLoggedIn:true, isSuperUser:false, emailOfUserLoggedIn:userWithInputedEmail.email}})
            }else{
                alert("Zły adres email lub hasło")
            }
        })
    }

    render() { 
        return ( 
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Wprowadź swój email" onChange={this.onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Hasło" onChange={this.onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Zaloguj
                </Button>
                <Form.Group>
                    <Form.Label><Link to={`/register`}>Nie masz jeszcze konta? Zarejestruj się.</Link></Form.Label>
                </Form.Group>

                {/* REDIRECTION */}
                {this.state.redirect ? (<Redirect to="/"/>):("")}
            </Form>
         );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.isLoggedIn,
        isSuperUser:state.isSuperUser,
        emailOfUserLoggedIn:state.emailOfUserLoggedIn
    }
}

export default connect(mapStateToProps)(LoginFormComponent);