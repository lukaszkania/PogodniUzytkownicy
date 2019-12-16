import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import RegisterSuccesInfoComponent from './components/RegisterSuccesInfoComponent/RegisterSuccesInfoComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import RegisterPageComponent from './components/RegisterPageComponent/RegisterPageComponent';
import UsersListPageComponent from './components/UsersListPageComponent/UsersListPageComponent';
import UserDetailPageComponent from './components/UserDetailPageComponent/UserDetailPageComponent';
import EditUserPageComponent from './components/EditUserPageComponent/EditUserPageComponent';
import DeleteUserPageComponent from './components/DeleteUserPageComponent/DeleteUserPageComponent';
import LoginPageComponent from './components/LoginPageComponent/LoginPageComponent';
import {connect} from 'react-redux';
import LogOutPageComponent from './components/LogOutPageComponent/LogOutPageComponent';
import "./App.scss";

class App extends Component {
  render() { 
    return ( 
      <Router>
        <Switch>
            <div id="main-container">
              <NavBarComponent />
              <Route exact path="/" component={HomePageComponent}/>
              <Route exact path="/users-list" component={UsersListPageComponent}/>
              <Route exact path="/user/detail/:userId" component={UserDetailPageComponent}/>

              {this.props.isLoggedIn ? 
              (
                <>
                  <Route exact path="/edit" component={EditUserPageComponent}/>
                  <Route exact path="/user/edit/:userId" component={EditUserPageComponent}/>
                  <Route exact path="/user/delete/:userId" component={DeleteUserPageComponent}/>
                  <Route exact path="/logout" component={LogOutPageComponent} />
                </>
              )
              :
              (
                <>
                  <Route exact path="/login" component={LoginPageComponent}/>
                  <Route exact path="/register" component={RegisterPageComponent}/>
                  <Route exact path="/register/succes" component={RegisterSuccesInfoComponent}/>
                </>
              )}
            </div>
        </Switch>
      </Router>
     );
  }
}
 
const mapStateToProps = state => {
  return {
      isLoggedIn:state.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);