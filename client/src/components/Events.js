import React, { Component } from 'react';
import getWeb3 from '../getWeb3';
import AidTrace from '../contracts/AidTrace.json';
import SingleEvent from './SingleEvent';
// import Torus from "@toruslabs/torus-embed";
// import Web3 from "web3";

// const web3Obj = {
//   web3: new Web3(),
//   setweb3: function(provider) {
//     const web3Inst = new Web3(provider)
//     web3Obj.web3 = web3Inst
//     sessionStorage.setItem('pageUsingTorus', true)
//   },
//   initialize: async function() {
//     const torus = new Torus()
//     await torus.init({
//       network: {
//         host: 'HTTP://127.0.0.1:7545',
//         networkName: 'dev'
//       },
//       enableLogging: false
//     })
//     await torus.login()
//     web3Obj.setweb3(torus.provider)
//   }
// }

class Events extends Component {
  constructor() {
    super();
    this.state = {
      web3: null,
      accounts: null,
      contract: null,
      events: [],
    };
    // this.enableTorus = this.enableTorus.bind(this)
    this.loadBlockchainData = this.loadBlockchainData.bind(this)
  }

  // enableTorus = async () => {
  //   try {
  //     await web3Obj.initialize()
  //     this.setState({web3: web3Obj})
  //     console.log('this.state.web3 after enableTorus', this.state.web3)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  async componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // get web3 instance made with Torus provider
      // this.enableTorus()

      // const web3 = this.state.web3

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = AidTrace.networks[networkId];
      const instance = new web3.eth.Contract(
        AidTrace.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state.
      this.setState({ web3, contract: instance });

      // Set list of existing events to the state.
      const eventsList = await this.state.contract.methods.deployedEvents().call();

      for (var i = 1; i <= eventsList.length; i++) {
        const event = await this.state.contract.methods.deployedEvents(i).call();
        this.setState({
          events: [...this.state.events, event],
        });
      }

      console.log('this.state.events', this.state.events);
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract.`);
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        {this.state.events.map((event, idx) => {
          return (
            <div key={idx}>
              <SingleEvent key={idx} event={this.state.events} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Events;
