import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import "./RegisterSuccesInfoComponent.scss";

class RegisterSuccesInfoComponent extends Component {
    // Redirect to /
    onClick = event => {
        this.props.history.push("/")
    }

    render() { 
        return ( 
            <section id="register-success-info-container">
                    <Card className="text-center">
                        <Card.Header>Gratulacje!</Card.Header>
                        <Card.Body>
                            <Card.Title>Rejestracja przebiegła pomyślnie</Card.Title>
                            <Card.Text>
                                Twoja nazwa użytkownika: <strong>{this.props.location.state.email}</strong>. 
                                Twoje hasło: <strong>{this.props.location.state.password}</strong>
                            </Card.Text>
                            <Button onClick={this.onClick} variant="primary">Wróć do strony głównej</Button>
                        </Card.Body>
                    <Card.Footer className="text-muted">Data rejestracji: {this.props.location.state.registerDate}</Card.Footer>
                </Card>
            </section>
         );
    }
}
 
export default RegisterSuccesInfoComponent;