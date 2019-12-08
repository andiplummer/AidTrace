import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import Wallet from './Wallet'

const Nav = () => {
  return (
      <nav>
        <div>
          <Link to="/"><h1>AidTrace</h1></Link>
        </div>
        <div>
          <Wallet />
        </div>
      </nav>
  )
}

export default Nav
