import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Dashboard } from '../containers/Dashboard'
import { SignIn } from '../containers/SignIn'
import { SignUp } from '../containers/SignUp'
import { Private } from '../containers/Private'
import { PrivateRoute } from '../containers/PrivateRoute'
import { AdminRoute } from '../containers/AdminRoute'

const App = (props) => {
  const {firstName} = props
  return (
    <Router>
    <div>
      <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/login">Login Page</Link>
      </li>
      <li>
        <Link to="/private">Private Page</Link>
      </li>
      <li>
        <Link to="/admin">Admin Page</Link>
      </li>

      </ul>
      <h1>{firstName}</h1>
          <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={SignIn} />
      <PrivateRoute path="/private" component={Private} />
      <AdminRoute path="/admin" component={SignUp} />

  </Switch>
    </div>

    </Router>
  )

}
export default App
