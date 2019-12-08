import React from 'react'
import TopDonations from './TopDonations'
import TrendingReliefs from './TrendingReliefs'
import AllNonProfitView from './AllNonProfitView'

const Home = () => {
  return (
    <div className="home">
      <div className="events">
        <AllNonProfitView />
      </div>
      <div className="stats">
        <TrendingReliefs />
        <TopDonations />
      </div>
    </div>
  )
}

export default Home
