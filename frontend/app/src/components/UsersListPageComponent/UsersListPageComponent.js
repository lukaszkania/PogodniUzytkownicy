import React, { Component } from 'react';
import axios from 'axios';
import USERS_API_URL from '../../constants/USERS_API_URL';
import {Accordion, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./UsersListPageComponent.scss";

class UsersListPageComponent extends Component {
    state = { 
        usersList:[]
     }

    componentDidMount = () => {
        axios.get(USERS_API_URL).then(response => {
            this.setState({
                usersList:response.data
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() { 
        return ( 
            <section id="users-list-container">
                {this.state.usersList.length ? 
                (
                    this.state.usersList.map(userObject => {
                        return (
                            <Accordion key={userObject.id}>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        {userObject.email}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Link to={`/user/detail/${userObject.id}`}><i className="far fa-eye"></i></Link>
                                        {this.props.isLoggedInUserIsAdmin ? 
                                            (
                                            <>
                                                <Link to={{pathname:`/user/edit/${userObject.id}`}}><i className="fas fa-user-edit"></i></Link>
                                                <Link to={`/user/delete/${userObject.id}`}><i className="fas fa-trash-alt"></i></Link>
                                            </>
                                            ):
                                            (
                                                ""
                                            )}
    
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                            )
                    })
                )
                :
                (
                    <p>
                        Obecnie nie ma żadnych stworzonych użytkowników.
                    </p>
                )
                }
            </section>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        isLoggedInUserIsAdmin:state.isLoggedInUserIsAdmin
    }
}

export default connect(mapStateToProps)(UsersListPageComponent);