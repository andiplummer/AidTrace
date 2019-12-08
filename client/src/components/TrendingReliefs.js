import React from 'react'

export default class TrendingReliefs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="topDonations">
        <div className="donationContainer">
          <h3>Trending Reliefs</h3>
          <h3>Received</h3>
        </div>
        <div className="donationContainer">
          <p>UNICEF</p>
          <p>$1,000,300</p>
        </div>
        <div className="donationContainer">
          <p>World Vision</p>
          <p>$890,500</p>
        </div>
        <div className="donationContainer">
          <p>Facebook</p>
          <p>$700,000</p>
        </div>
        <div className="donationContainer">
          <p>All Hands and Hearts</p>
          <p>$500,000</p>
        </div>
      </div>
    )
  }
}