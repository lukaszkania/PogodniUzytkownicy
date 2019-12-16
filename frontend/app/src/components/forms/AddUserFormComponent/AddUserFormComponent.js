import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { CHARSET, LENGTH} from '../../../constants/PASSWORD_GENERATOR_REQUIREMENTS';
import axios from 'axios';
import USERS_API_URL from '../../../constants/USERS_API_URL';
import {Redirect, Link} from 'react-router-dom';
import { generatePassword } from '../../../constants/FUNCTIONS';
import "./AddUserFormComponent.scss";

class AddUserFormComponent extends Component {
    // State handling data about user used to be registered from inputs
    state = { 
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        email: "",
        password:"",
        isSuperUser: false,
        
        redirect:false,
        pathToRedirect:"",
        registerDate:""
     };

    // Handling change in form inputs (every input field name have to be equals to state property name)
    onChange = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        event.target.type === "checkbox" ? (this.setState({isSuperUser:event.target.checked})) : (this.setState({[inputName]:inputValue})
        ) 
    }

    // Return object that will be send to REST API
    getNewUserObject = () => {
        const password = generatePassword(CHARSET, LENGTH);
        this.setState({
            password:password
        })
        const {firstName, lastName, city, country, email, isSuperUser} = this.state;
        const userData = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            country: country,
            email: email,
            password: password,
            isSuperUser: isSuperUser,
        }
        return userData
    }

    // Function execute in onSubmit form function
    defineWhatToDoDependsFromStatusCode = statusCode => {
        switch(statusCode){
            case 201:
                this.setState({
                    redirect:true,
                    pathToRedirect:"/register/succes"
                })
                break;            
            case 400:
                alert("Użytkownik o takim email'u już istnieje!")   
                break;                     
            default:
                break;
            }
    }

    // Handling form submit
    onSubmit = event => {
        event.preventDefault();
        let statusCode = "";
        this.setState({
            registerDate:new Date().toLocaleString()
        })

        const newUser = this.getNewUserObject();
        axios.post(USERS_API_URL, newUser).then(response => {
            statusCode = 201;
        }).catch(error => {
            statusCode = 400;
        }).finally(() => {
            this.defineWhatToDoDependsFromStatusCode(statusCode);
        })
    };

    render() { 
        return ( 
            <section id="add-user-form-container">
                <Form id="add-user-form" onSubmit={this.onSubmit}>
                    {/* First NAME */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control name="firstName" type="text" placeholder="Wprowadź swoje imię" required={true} onChange={this.onChange}/>
                    </Form.Group>

                    {/* LAST NAME */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control name="lastName" type="text" placeholder="Wprowadź swoje nazwisko" required={true} onChange={this.onChange}/>
                    </Form.Group>

                    {/* CITY */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Miasto</Form.Label>
                        <Form.Control name="city" type="text" placeholder="Wprowadź nazwe swojego miasta" required={true} onChange={this.onChange}/>
                    </Form.Group>

                    {/* COUNTRY */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kraj</Form.Label>
                        <Form.Control name="country" type="text" placeholder="Wprowadź nazwe swojego kraju" required={true} onChange={this.onChange}/>
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Wprowadź swój email" required={true} onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            Do jednego email'a możliwe jest przypisanie tylko jednego użytkownika.
                        </Form.Text>
                    </Form.Group>

                    {/* IS SUPER USER */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Uprawnienia administratorskie:</Form.Label>
                        <Form.Check name="isSuperUser" type="checkBox" onChange={this.onChange} checked={this.state.isSuperUser}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Dodaj
                    </Button>

                    <Form.Group>
                        <Form.Label><Link to="/login">Masz już konto? Zaloguj się!</Link></Form.Label>
                    </Form.Group>
                    {/* REDIRECTION */}
                    {this.state.redirect ? (<Redirect to={{pathname: this.state.pathToRedirect, state:{registerDate:this.state.registerDate, email:this.state.email, password:this.state.password}}}/>):(<Redirect to={"/register"}/>)}
                </Form>
            </section>
         );
    }
}
 
export default AddUserFormComponent;