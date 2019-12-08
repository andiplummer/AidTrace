import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEventForm from './components/CreateEventForm';
import Events from './components/Events';
import SingleEvent from './components/SingleEvent';
import Donate from './components/Donate';
import Nav from './components/Nav'
import "./App.css";

const Routes = () => {
  return (
    <Router>
      <div id="root">
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/donorsignup" />
          <Route path="/nonprofitsignup" />
          <Route path="/create-event" component={CreateEventForm}/>
          <Route path="/event" component={SingleEvent}/>
          <Route path="/events" component={Events}/>
          <Route path="/donate" component={Donate}/>
          <Route path="/Withdraw" component={Donate}/>
          <Route path="/transactionsummary" />
          <Route path="/singleevent" />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
