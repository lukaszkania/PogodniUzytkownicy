import React, { Component } from 'react';
import DeleteUserComponent from '../DeleteUserComponent/DeleteUserComponent';
import './DeleteUserPageComponent.scss';

class DeleteUserPageComponent extends Component {
    state = { 
        userId:this.props.match.params.userId
     }
    render() { 
        return ( 
            <section id="delete-confirmation-container">
                <DeleteUserComponent userId={this.state.userId} />
            </section>
         );
    }
}
 
export default DeleteUserPageComponent;