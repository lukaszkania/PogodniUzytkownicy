import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class RegisterSuccesInfoComponent extends Component {
    // Redirect to /
    onClick = event => {
        this.props.history.push("/")
    }

    render() { 
        return ( 
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
         );
    }
}
 
export default RegisterSuccesInfoComponent;