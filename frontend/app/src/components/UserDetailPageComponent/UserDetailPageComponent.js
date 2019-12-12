import React, { Component } from 'react';
import axios from 'axios';
import USERS_API_URL from '../../constants/USERS_API_URL';
import {Card} from 'react-bootstrap';
import WeatherWidgetComponent from '../WeatherWidgetComponent/WeatherWidgetComponent';
import {connect} from 'react-redux';

class UserDetailPageComponent extends Component {
    state = { 
        userId: this.props.match.params.userId,
        userObject:{}
     }

    componentDidMount = () => {
        axios.get(`${USERS_API_URL}${this.state.userId}`).then(response => {
            this.setState({
                userObject:response.data
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() { 
        return ( 
            <>
                <Card>
                    <Card.Title>Użytkownik: </Card.Title>
                    <Card.Text>{this.state.userObject.email}</Card.Text>
                    <Card.Title>Imię: </Card.Title>
                    <Card.Text>{this.state.userObject.firstName}</Card.Text>
                    <Card.Title>Nazwisko: </Card.Title>
                    <Card.Text>{this.state.userObject.lastName}</Card.Text>
                    <Card.Title>Kraj: </Card.Title>
                    <Card.Text>{this.state.userObject.country}</Card.Text>
                    <Card.Title>Miasto: </Card.Title>
                    <Card.Text>{this.state.userObject.city}</Card.Text>
                    <Card.Title>Rodzaj konta: </Card.Title>
                    <Card.Text>{!this.state.userObject.isSuperUser ? 
                        ("Brak uprawnień administratorskich")
                        :
                        ("Administrator")}
                    </Card.Text>
                </Card>
                {this.props.isLoggedIn ? 
                (
                    <WeatherWidgetComponent />
                )
                :
                (
                    <>
                        Aby zobaczyć pogodę, <a href="/login">zaloguj się,</a>
                        lub <a href="/register">załóż konto!</a>
                    </>
                )
                }
            </>
         );
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn:state.isLoggedIn
    }
}

 
export default connect(mapStateToProps)(UserDetailPageComponent);