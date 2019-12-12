import React, { Component } from 'react';
import {connect} from 'react-redux';

// /
class HomePageComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            Home Page Component
            {this.props.isLoggedIn ? (<div>Jestes zalogowany</div>):(<div>Nie jestes zalogowany</div>)}
            {this.props.isLoggedInUserIsAdmin ? (<div>Jestes zalogowany jako admin</div>):(<div>Nie jestes zalogowany jako admin</div>)}
            </>
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