import React from 'react'
import TopDonations from './TopDonations'
import TrendingReliefs from './TrendingReliefs';

const Home = () => {
  return (
    <div className="home">
      <div className="events">
      </div>
      <div className="stats"> 
        <TrendingReliefs />
        <TopDonations />
      </div>
    </div>
  )
}

export default Home