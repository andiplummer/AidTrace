import React, { Component } from "react";
<<<<<<< HEAD
import getWeb3 from "../getWeb3";
import AidTrace from "../contracts/AidTrace.json";
import DonationEvent from "../contracts/DonationEvent.json";
=======
// import getWeb3 from "../getWeb3";
// import AidTrace from "../contracts/AidTrace.json";
>>>>>>> 342802df7877ff2000bb7382510981cdaa0dcb8e

class CreateEventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      min: '',
      desc: '', // do we want to add a description of the event?
      message: 'Please enter and submit event details.',
      addressDonor: '',
      web3: null,
      accounts: null,
      contractAid: null,
      contractDonate:null
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount = async () => {
    //   try {
    //     // Get network provider and web3 instance.
    //     const web3 = await getWeb3();

    //     // Use web3 to get the user's accounts.
    //     const accounts = await web3.eth.getAccounts();

<<<<<<< HEAD
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = AidTrace.networks[networkId];
        const AidTraceinstance = new web3.eth.Contract(
          AidTrace.abi,
          deployedNetwork && deployedNetwork.address,
        );
        const DonationEventinstance = new web3.eth.Contract(
          DonationEvent.abi,
          deployedNetwork && deployedNetwork.address,
        );
        

        console.log("AidTrace",AidTraceinstance)
        console.log("DonationEvent",DonationEventinstance)
        // Set web3, accounts, and contract to the state.
        this.setState({ web3, accounts, contractAid: AidTraceinstance, contractDonate: DonationEventinstance});
        
=======
    //     // Get the contract instance.
    //     const networkId = await web3.eth.net.getId();
    //     const deployedNetwork = AidTrace.networks[networkId];
    //     const instance = new web3.eth.Contract(
    //       AidTrace.abi,
    //       deployedNetwork && deployedNetwork.address,
    //     );

    //     // Set web3, accounts, and contract to the state.
    //     this.setState({ web3, accounts, contract: instance });
>>>>>>> 342802df7877ff2000bb7382510981cdaa0dcb8e

    //   } catch (error) {
    //     alert(
    //       `Failed to load web3, accounts, or contract.`,
    //     );
    //     console.error(error);
    //   }
    // };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // async handleSubmit(event) {
  //   try {
  //     event.preventDefault();
  //     this.setState({message: 'Creating event...'})

<<<<<<< HEAD
      // reminder: need to save description to backend
      // code gets stuck on creating event status but doesn't fail
      await this.state.contractAid.methods.createEvent(this.state.min, this.state.name).send({ from: this.state.accounts[0]});
      
      const logs = await this.state.contractAid.logs[1].event 



      console.log("events",logs)
      
     console.log("methods",this.state.accounts[0])
      this.setState({
        min: '',
        name: '',
        addressDonor: '',
        message: 'Event created!'
      });
    } catch (error) {
      alert(
        `Event creation failed.`,
      );
      console.error(error)
    }
  }
=======
  //     // reminder: need to save description to backend
  //     // code gets stuck on creating event status but doesn't fail
  //     await this.state.contract.methods.createEvent(this.state.min, this.state.name).send({ from: this.state.accounts[0]});

  //     this.setState({
  //       min: '',
  //       name: '',
  //       addressDonor: '',
  //       message: 'Event created!'
  //     });
  //   } catch (error) {
  //     alert(
  //       `Event creation failed.`,
  //     );
  //     console.error(error)
  //   }
  // }
>>>>>>> 342802df7877ff2000bb7382510981cdaa0dcb8e

  render() {
    return (
      <div>
      <div className="Contract">
        <div className="createEventForm">
        <p>Create an event</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Event name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="desc"
            onChange={this.handleChange}
            value={this.state.desc}
          />
        </label>

        <label>
          Minimum contribution (ETH):
          <input
            type="text"
            name="min"
            onChange={this.handleChange}
            value={this.state.min}
          />
        </label>

        <button className="btn" type="submit">Submit</button>
      </form>
      <div>
        <p>Even creation status: {this.state.message}</p>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default CreateEventForm
