import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Taqueria Calculator</title>
        <meta property="og:title" content="Taqueria Calculator" />
      </Helmet>
      <button className="button">?שמנת, כוסברה, חריף סבבה</button>
      <img
        alt="pastedImage"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/29d4a971-6ec8-423c-89b4-41db65e59d85/e3368f47-ede4-40ae-a795-54e542722da0?org_if_sml=14155414"
      />
    </div>
  )
}

export default Home
