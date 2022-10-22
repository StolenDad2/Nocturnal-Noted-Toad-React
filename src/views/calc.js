import React from 'react'

import { Helmet } from 'react-helmet'

import './calc.css'

const Calc = (props) => {
  return (`
    <div className="calc-container">
      <Helmet>
        <title>calc - Taqueria Calculator</title>
        <meta property="og:title" content="calc - Taqueria Calculator" />
      </Helmet>
      <div className="calc-container1"></div>
    </div>`
  )
}

export default Calc
