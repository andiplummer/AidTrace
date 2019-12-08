// import React, { Component } from 'react';
// import getWeb3 from '../getWeb3';
// import AidTrace from '../contracts/AidTrace.json';
// import SingleEvent from './SingleEvent';
// import CreateEventForm from './CreateEventForm'
// // import Torus from "@toruslabs/torus-embed";
// // import Web3 from "web3";

// class Events extends Component {
//   constructor() {
//     super();
//     this.state = {
//       web3: null,
//       accounts: null,
//       contract: null,
//       events: [],
//     };
//     this.loadBlockchainData = this.loadBlockchainData.bind(this);
//   }

//   async componentDidMount() {
//     this.loadBlockchainData();
//   }

//   async loadBlockchainData() {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = AidTrace.networks[networkId];
//       const instance = new web3.eth.Contract(
//         AidTrace.abi,
//         deployedNetwork && deployedNetwork.address
//       );

//       // Set web3, accounts, and contract to the state.
//       this.setState({ web3, contract: instance, accounts });

//       // Set list of existing events to the state.
//       // error now because no events created yet so nothing in deployedEvents array yet
//       // need to fix create event form first
//       const eventsList = await this.state.contract.methods
//         .deployedEvents()
//         .call();

//       // need to add in if event msg.sender address = company logged in, then render that company's events only
//       for (var i = 1; i <= eventsList.length; i++) {
//         const event = await this.state.contract.methods
//           .getDeployedEvents(i)
//           .call();
//         // if(event.)
//         this.setState({
//           events: [...this.state.events, event],
//         });
//       }

//       console.log('this.state.events', this.state.events);
//     } catch (error) {
//       alert(`Failed to load web3, accounts, or contract.`);
//       console.error(error);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <h1>Events</h1>
//           {this.state.events.map((event, idx) => {
//             return (
//               <div key={idx}>
//                 <SingleEvent key={idx} event={event} />
//               </div>
//             );
//           })}
//         </div>
//         <div>
//           <h2>Create new event</h2>
//           <CreateEventForm />
//         </div>
//       </div>
//     );
//   }
// }

// export default Events;
