import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/nonprofits">View Non-Profits</Link>
      </nav>
  )
}

export default Nav