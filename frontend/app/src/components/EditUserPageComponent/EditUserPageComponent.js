import React, { Component } from 'react';
import EditUserFormComponent from '../forms/EditUserFormComponent/EditUserFormComponent';

class EditUserPageComponent extends Component {
    state = { 
     }
    render() { 
        return ( 
            <EditUserFormComponent userId={this.props.match.params.userId}/>
         );
    }
}
 
export default EditUserPageComponent;