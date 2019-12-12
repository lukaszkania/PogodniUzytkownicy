import React, { Component } from 'react';
import { LOG_OUT } from '../../constants/ACTION_TYPES';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LogOutPageComponent extends Component {
    componentDidMount = () => {
        this.props.dispatch({type:LOG_OUT, object:{isLoggedIn:false, isSuperUser:false, emptyEmailString:""}})
    }

    render() { 
        return ( 
            <>
                <Redirect to="/" />
            </>
         );
    }
}

const mapStateToProps = state => {
    return{
        ...state
    }
}
 
export default connect(mapStateToProps)(LogOutPageComponent);