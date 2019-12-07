import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Wallet from './Wallet'

const Nav = () => {
  return (
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
        </div>
        <div>
          <Wallet />
        </div>
      </nav>
  )
}

export default Nav