import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavBarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Pogodni Użytkownicy</Link></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><Link to="/">Główna</Link></Nav.Link>
                <Nav.Link><Link to="/users-list">Lista użytkowników</Link></Nav.Link>   
                {this.props.isLoggedIn ? 
                    (
                        <>
                            Witaj {this.props.emailOfUserLoggedIn}
                            <Nav.Link><Link to="/my-account">Moje konto</Link></Nav.Link>
                            <Nav.Link><Link to="/logout">Wyloguj</Link></Nav.Link>
                        </>
                    )
                    :
                    (
                        <>
                            <Nav.Link><Link to="/register">Załóż konto</Link></Nav.Link>
                            <Nav.Link><Link to="/login">Zaloguj się</Link></Nav.Link>
                        </>
                    )
                }
                {/* <Nav.Link>Kontakt</Nav.Link> */}
                </Nav>
            </Navbar>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        isLoggedIn:state.isLoggedIn,
        emailOfUserLoggedIn:state.emailOfUserLoggedIn
    }
}

export default connect(mapStateToProps)(NavBarComponent);