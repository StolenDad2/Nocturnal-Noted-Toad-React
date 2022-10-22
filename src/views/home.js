import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Taqueria Calculator</title>
        <meta property="og:title" content="Taqueria Calculator" />
      </Helmet>
      <div className="home-container1">
        <Link to="/calc" className="home-button button">
          ?שמנת כוסברה חריף
        </Link>
      </div>
    </div>
  )
}

export default Home
