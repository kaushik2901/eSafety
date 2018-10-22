import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './Authentication/';
import Dasboard from './Dashboard';

class App extends Component {

  //state of root app
  state = {
    isLoggedIn: true
  }

  setLogin = () => {
    this.setState({
      isLoggedIn: true
    })     
  }

  setLogout = () => {
    this.setState({
      isLoggedIn: false
    })     
  }

  //checking login status for login route
  checkLoginStatus = () => {
    if(this.state.isLoggedIn) {
      return (<Redirect to="/Dashboard/" />)
    }
    return (<Login setLogin={this.setLogin} />)
  }

  //checking login status for office dashboard
  redirectIfNotLoggedInOfficer = () => {
    return this.state.isLoggedIn ? (<Dasboard setLogout={this.setLogout} />) : <Redirect to="/Login" />;
  }


  //main render method
  render() {
    return (
      <HashRouter>
        <div>
          {/* main routes for app */}
          <Switch>
            <Route exact path="/Login" render={this.checkLoginStatus} />
            <Route exact path="/Dashboard*" render={this.redirectIfNotLoggedInOfficer} />
            <Route exact path="/">
              <Redirect to="/Dashboard/" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
