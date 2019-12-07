import React, { Component } from "react";
import getWeb3 from "../getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import SingleEvent from './SingleEvent'

class Events extends Component {
  constructor(){
    super()
    this.state = {
      web3: null,
      // accounts: null,
      contract: null,
      contractTest: {
        events: [{name: 'Fire in California', min: 2, address: '0x000001'}, {name: 'Fire in California', min: 2, address: '0x000001'}]
      },
      events:[]
    }
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      // const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state.
      this.setState({ web3, contract: instance });

      // Set list of existing events to the state.
      // for (let i = 0; i < events; i++) {
      //   const event = await instance.methods.events(i).call()
      //   this.setState({
      //     events: [...this.state.events, event]
      //   })
      // }

      // with test object instead of actual contract

      // const eventsListTest = this.state.contractTest.events.reduce((accum, event) => {
      //   accum.push(event)
      //   return accum
      // }, [])

      console.log('events on test obj', this.state.contractTest.events)

      const eventsListTest = []
      for (let i = 0; i < this.state.contractTest.events; i++) {
        const event = this.state.contractTest.events[i]
        eventsListTest.push(event)
      }
      console.log('eventsLIstTEst', eventsListTest)

      this.setState({events: eventsListTest})

      console.log('EVENTS', this.state.events)

    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract.`,
      );
      console.error(error);
    }
  };

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

export default Events
