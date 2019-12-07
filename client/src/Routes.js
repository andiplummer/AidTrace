import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Wallet'
import Signup from './components/Signup'
import Nav from './components/Nav'

const Routes = () => {
  return (
    <Router>
      <div id="root">
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/donorsignup" />
          <Route path="/nonprofitsignup" />
          <Route path="/events" />
          <Route path="/transactionsummary" />
          <Route path="/singleevent" />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes