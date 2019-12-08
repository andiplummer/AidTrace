import React from 'react'
import web3Obj from '../getWeb3'

class Wallet extends React.Component {
  constructor() {
    super()
    this.state = {
      account: '',
      balance: ''
    }
  }

  componentDidMount() {
    const isTorus = sessionStorage.getItem('pageUsingTorus')

    if (isTorus) {
      web3Obj.initialize().then(() => {
        this.setStateInfo()
      })
    }
  }

  setStateInfo() {
    web3Obj.web3.eth.getAccounts().then(accounts => {
      this.setState({ account: accounts[0] })
      web3Obj.web3.eth.getBalance(accounts[0]).then(balance => {
        const balanceInEther = web3Obj.web3.utils.fromWei(balance)
        this.setState({ balance: balanceInEther + ' ETH' })
      })
    })
  }

  enableTorus = async () => {
    try {
      await web3Obj.initialize()
      this.setStateInfo()
      console.log(this.state)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div class="wallet">
          {
            this.state.account ? 
            
            <div class="accountInfo">
              <p>Account: {this.state.account.slice(0, 5)}</p>
              <p>Balance: {this.state.balance}</p>
            </div>
  
            : 
            
            <div>
              <button onClick={this.enableTorus}>Login</button>
            </div>
          }      
      </div>
    )
  }
}

export default Wallet