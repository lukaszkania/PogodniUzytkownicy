import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import USERS_API_URL from '../../../constants/USERS_API_URL';
import {Redirect} from 'react-router-dom';
import { LENGTH } from '../../../constants/PASSWORD_GENERATOR_REQUIREMENTS';
import './EditUserFormComponent.scss';

class EditUserFormComponent extends Component {
    state = { 
        userId:this.props.userId,
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        email: "",
        password:"",
        isSuperUser: true,
        redirect:false,
        redirectPath:"/users-list"
     }

    //  Filling inputs with specific user data from REST API
     componentDidMount = () => {
         axios.get(`${USERS_API_URL}${this.state.userId}`).then(response => {
             this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                city: response.data.city,
                country: response.data.country,
                email: response.data.email,
                password:response.data.password,
                isSuperUser:response.data.isSuperUser
             })
         }).catch(error => {
             console.log(error.message)
         })
     }

    //  Providing change to state while changing inputs
     onChange = event => {
         const inputName = event.target.name;
         const inputValue = event.target.value;
         event.target.type === "checkbox" ? (this.setState({isSuperUser:event.target.checked})) : (this.setState({[inputName]:inputValue})
         ) 
     }

    // Return edited user data from actual state
    getEditedUserObjectData = () => {
        const editedUserData = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            city:this.state.city,
            country:this.state.country,
            email:this.state.email,
            password:this.state.password,
            isSuperUser:this.state.isSuperUser
        };
        return editedUserData
    }

    // Sending edit data object from state to REST API
    onSubmit = event => {
        event.preventDefault();
        const editedUserData = this.getEditedUserObjectData();
        axios.patch(`${USERS_API_URL}${this.state.userId}/`, editedUserData).then(response => {
            alert(`Użytkownik ${this.state.email} został edytowany`)
        }).catch(error => {
            alert("Wystąpił błąd podczas edycji użytkownika...")
        }).finally(() => {
            this.setState({
                redirect:true
            })
        })
    }

    render() { 
        return ( 
            <section id="edit-user-form-container">
                <Form onSubmit={this.onSubmit}>
                    {/* First NAME */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control name="firstName" type="text" placeholder="Wprowadź swoje nowe imię" required={true} onChange={this.onChange} value={this.state.firstName}/>
                    </Form.Group>

                    {/* LAST NAME */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control name="lastName" type="text" placeholder="Wprowadź swoje nowe nazwisko" required={true} onChange={this.onChange} value={this.state.lastName}/>
                    </Form.Group>

                    {/* CITY */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Miasto</Form.Label>
                        <Form.Control name="city" type="text" placeholder="Wprowadź nową nazwe swojego miasta" required={true} onChange={this.onChange} value={this.state.city}/>
                    </Form.Group>

                    {/* COUNTRY */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Kraj</Form.Label>
                        <Form.Control name="country" type="text" placeholder="Wprowadź nową nazwe swojego kraju" required={true} onChange={this.onChange} value={this.state.country}/>
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control readOnly={true} name="email" type="email" required={true} onChange={this.onChange} value={this.state.email}/>
                        <Form.Text className="text-muted">
                            Do jednego email'a możliwe jest przypisanie tylko jednego użytkownika.
                        </Form.Text>
                    </Form.Group>

                    {/* PASSWORD */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control maxLength={LENGTH} name="password" type="text" placeholder="Wprowadź nowe hasło" required={true} onChange={this.onChange} value={this.state.password}/>
                        <Form.Text name="password" type="text" onChange={this.onChange} value={this.state.password}/>
                    </Form.Group>

                    {/* IS SUPER USER */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Uprawnienia administratorskie:</Form.Label>
                        <Form.Check name="isSuperUser" type="checkBox" onChange={this.onChange} checked={this.state.isSuperUser}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Edytuj
                    </Button>

                    {/* REDIRECT */}
                    {this.state.redirect ? (<Redirect to={this.state.redirectPath}/>):("")}
                </Form>
            </section>
         );
    }
}
 
export default EditUserFormComponent;