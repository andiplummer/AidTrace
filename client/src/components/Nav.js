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
      modalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
  return (
      <nav>
        <div>
          <Link to="/"><h1 id="header">AidTrace</h1></Link>
        </div>
        <div>
          <button onClick={this.openModal}>Add Event</button>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add an event"
        >
          <div>
            <h2 ref={subtitle => this.subtitle = subtitle}>Add a new event</h2>
            <button onClick={this.closeModal}>close</button>
          </div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </nav>
  )
  }
}

export default Nav
