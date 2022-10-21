import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nocturnal Noted Toad</title>
        <meta property="og:title" content="Nocturnal Noted Toad" />
      </Helmet>
      <h1 className="home-text">?שמנת כוסברה חריף סבבה</h1>
    </div>
  )
}

export default Home
