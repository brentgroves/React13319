import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4/v5
//import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Dashboard } from '../containers/Dashboard'
import { SignIn } from '../containers/SignIn'
import { SignUp } from '../containers/SignUp'
import { AdminRoute } from '../containers/AdminRoute'
//https://reacttraining.com/blog/react-router-v5/
//<Route exact path="/" render={() => (<div>Match</div>)} />
//<Route render={() => (<div>Miss</div>)} />
/*
<Route exact path="/" component={SignIn} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/private" component={Private} />

<PrivateRoute exact path="/" component={Dashboard} />
<Route path="/login" component={SignIn} />
<PrivateRoute path="/private" component={Private} />
<AdminRoute path="/admin" component={SignUp} />

<Route exact path="/" component={Dashboard} />
<Route path="/login" component={SignIn} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/private" component={Private} />

*/


const App = (props) => {
  const {firstName} = props
  return (
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>

  )

}
export default App
