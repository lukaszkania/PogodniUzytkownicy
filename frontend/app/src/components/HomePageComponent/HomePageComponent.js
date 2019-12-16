import React, { Component } from 'react';
import {connect} from 'react-redux';
import "./HomePageComponent.scss";
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// /
class HomePageComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="home-page-container">
                <article>
                    <h1>Pogodni Użytkownicy - miejsce gdzie pogodna nigdy Cie nie zaskoczy!</h1>
                    <Link to="/users-list"><Button variant={"success"}>Lista użytkowników</Button></Link>      
                    <a href="https://lukaszkania.github.io/"><Button variant={"success"}>Kontakt</Button></a> 
                </article>            
            </section>
         );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoggedInUserIsAdmin:state.isLoggedInUserIsAdmin
    }
}
 
export default connect(mapStateToProps)(HomePageComponent);