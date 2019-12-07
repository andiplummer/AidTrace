import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AllNonProfitView from './components/AllNonProfitView';

const Routes = () => {
  return (
    <Router>
      <div id="root">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/nonprofits" component={AllNonProfitView} />
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