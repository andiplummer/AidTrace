import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEventForm from './components/CreateEventForm';

const Routes = () => {
  return (
    <Router>
      <div id="root">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" />
          <Route path="/signup" />
          <Route path="/donorsignup" />
          <Route path="/nonprofitsignup" />
          <Route path="/createevent" component={CreateEventForm}/>
          <Route path="/events" />
          <Route path="/transactionsummary" />
          <Route path="/singleevent" />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
