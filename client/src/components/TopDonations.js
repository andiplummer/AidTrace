import React from 'react'

export default class TopDonations extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="topDonations">
        <div className="donationContainer">
          <h3>Donor Leaderboard</h3>
          <h3>Donated</h3>
        </div>
        <div className="donationContainer">
          <p>Google</p>
          <p>$1,000,300</p>
        </div>
        <div className="donationContainer">
          <p>Amazon</p>
          <p>$890,500</p>
        </div>
        <div className="donationContainer">
          <p>Facebook</p>
          <p>$700,000</p>
        </div>
        <div className="donationContainer">
          <p>Salesforce</p>
          <p>$500,000</p>
        </div>
      </div>
    )
  }
}