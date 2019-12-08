import React, { Component } from "react";
import getWeb3 from "../getWeb3";
import AidTrace from "../contracts/AidTrace.json";

class CreateEventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '', // message sender's address
      min: '',
      desc: '',
      message: 'Please enter and submit event details.',
      addressDonor: '',
      web3: null,
      accounts: null,
      contract: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = AidTrace.networks[networkId];
        const instance = new web3.eth.Contract(
          AidTrace.abi,
          deployedNetwork && deployedNetwork.address,
        );

        // Set web3, accounts, and contract to the state.
        this.setState({ web3, accounts, contract: instance });

      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract.`,
        );
        console.error(error);
      }
    };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      this.setState({message: 'Creating event...'})

      await this.state.contract.methods.createEvent(this.state.min, this.state.name, this.state.accounts[0]).send({ from: this.state.accounts[0]});
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

  render() {
    return (
      <div>
      <div className="Contract">
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
          Minimum contribution (ETH):
          <input
            type="text"
            name="min"
            onChange={this.handleChange}
            value={this.state.min}
          />
        </label>

        <button className="btn" type="submit">Donate</button>
      </form>
      <div>
        <p className="italic">Even creation status: {this.state.message}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default CreateEventForm
