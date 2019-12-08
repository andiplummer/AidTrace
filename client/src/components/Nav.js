import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import Wallet from './Wallet'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      donateOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeDonate = this.closeDonate.bind(this)
    this.openDonate = this.openDonate.bind(this)
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  openDonate() {
    this.setState({donateOpen: true})
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  closeDonate() {
    this.setState({donateOpen: false})

  }

  render() {
  return (
      <nav>
        <div>
          <Link to="/"><h1 id="header">AidTrace</h1></Link>
        </div>
        <div>
          <button onClick={this.openDonate}>Donate</button>
          <button onClick={this.openModal}>Add Event</button>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add an event"
        >
          <div className="donationHeader">
            <h2 ref={subtitle => this.subtitle = subtitle}>Add a new event</h2>
            <button onClick={this.closeModal}>X</button>
          </div>
          <form className="form">
            <input 
              placeholder="Event name"
             />
            <input 
              placeholder="Miniumum contribution"
            />
            <button>Add event</button>
          </form>
        </Modal>
        <Modal
          isOpen={this.state.donateOpen}
          onRequestClose={this.closeDonate}
          style={customStyles}
          contentLabel="Add an event"
        >
          <div className="donationHeader">
            <h2 ref={subtitle => this.subtitle = subtitle}>Make a donation</h2>
            <button onClick={this.closeDonate}>X</button>
          </div>
          <form className="form">
            <input 
              placeholder="Event name"
             />
            <input 
              placeholder="Minimum contribution"
            />
            <input
              placeholder="Charity address"
            />
            <button>Donate</button>
          </form>
        </Modal>
      </nav>
  )
  }
}

export default Nav
