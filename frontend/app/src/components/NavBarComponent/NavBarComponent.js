import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBarComponent.scss';
import logo from "../../media/img/logo.jpg";

class NavBarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <nav id="nav-bar-container">
                    {this.props.isLoggedIn ? 
                    (
                        <>
                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                            <div>
                                <p>Witaj {this.props.emailOfUserLoggedIn}</p>
                                <Link to="/logout">Wyloguj</Link>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <Link to="/register"><Button variant={"info"}>Załóż konto już teraz!</Button></Link>
                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                            <Link to="/login"><Button variant={"info"}>Zaloguj się</Button></Link>
                        </>
                    )
                    }
                </nav>
            </>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        isLoggedIn:state.isLoggedIn,
        emailOfUserLoggedIn:state.emailOfUserLoggedIn,
        isLoggedInUserIsAdmin:state.isLoggedInUserIsAdmin
    }
}

export default connect(mapStateToProps)(NavBarComponent);