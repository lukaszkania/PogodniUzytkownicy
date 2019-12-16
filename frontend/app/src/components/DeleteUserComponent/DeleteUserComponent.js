import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import USERS_API_URL from '../../constants/USERS_API_URL';
import {Redirect} from 'react-router-dom';
 
class DeleteUserComponent extends Component {
    state = { 
        userId:this.props.userId,
        redirect:false,
        redirectPath:"/"
     }

    onClickConfirmButton = event => {
        axios.delete(`${USERS_API_URL}${this.state.userId}/`).then(response => {
            alert("Użytkownik został usunięty.")
        }).catch(error => {
            alert("Wystąpił błąd podczas usuwania użytkownika...")
        }).finally(() => {
            this.setState({
                redirect:true,
                redirectPath:"/"
            })
        })
    }

    onClickCancelButton = event => {
        this.setState({
            redirect:true,
            redirectPath:"/users-list"
        })
    }

    render() { 
        return ( 
        <section id="delete-confirmation-container">
            <h3>Czy na pewno chcesz usunąć użytkownika o id: {this.state.userId}?</h3>
            <Button variant={"primary"} title={"Usuń"} onClick={this.onClickConfirmButton}>Tak</Button>
            <Button variant={"danger"} title={"Zabierz mnie stąd"} onClick={this.onClickCancelButton}>Nie</Button>
            {/* REDIRECT */}
            {this.state.redirect ? (<Redirect to={this.state.redirectPath} />):("")}
        </section>
         );
    }
}
 
export default DeleteUserComponent;