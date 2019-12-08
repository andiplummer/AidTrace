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
  //   const isTorus = sessionStorage.getItem('pageUsingTorus')

  //   if (isTorus) {
  //     web3Obj.initialize().then(() => {
  //       this.setStateInfo()
  //     })
  //   }
  // }

  // setStateInfo() {
  //   web3Obj.web3.eth.getAccounts().then(accounts => {
  //     this.setState({ account: accounts[0] })
  //     web3Obj.web3.eth.getBalance(accounts[0]).then(balance => {
  //       const balanceInEther = web3Obj.web3.utils.fromWei(balance)
  //       this.setState({ balance: balanceInEther + ' ETH' })
  //     })
  //   })
  // }

  // enableTorus = async () => {
  //   try {
  //     await web3Obj.initialize()
  //     this.setStateInfo()
  //     console.log(this.state)
  //   } catch (error) {
  //     console.error(error)
  //   }
  }

  render() {
    return (
      <div className="wallet">
          {
<<<<<<< HEAD

            this.state.account ?
            <div className="accountInfo">
              <div>Account: {this.state.account.slice(0, 5)}</div>
              <div>Balance: {this.state.balance}</div>
            </div>

            :


            this.state.account ?

=======
            this.state.account ?
>>>>>>> 342802df7877ff2000bb7382510981cdaa0dcb8e
            <div class="accountInfo">
              <p>Account: {this.state.account.slice(0, 5)}</p>
              <p>Balance: {this.state.balance}</p>
            </div>
            :
<<<<<<< HEAD


=======
>>>>>>> 342802df7877ff2000bb7382510981cdaa0dcb8e
            <div>
              <button onClick={this.enableTorus}>Login</button>
            </div>
          }
      </div>
    )
  }
}

export default Wallet
