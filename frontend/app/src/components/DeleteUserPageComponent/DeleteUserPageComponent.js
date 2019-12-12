import React, { Component } from 'react';
import DeleteUserComponent from '../DeleteUserComponent/DeleteUserComponent';

class DeleteUserPageComponent extends Component {
    state = { 
        userId:this.props.match.params.userId
     }
    render() { 
        return ( 
            <DeleteUserComponent userId={this.state.userId} />
         );
    }
}
 
export default DeleteUserPageComponent;