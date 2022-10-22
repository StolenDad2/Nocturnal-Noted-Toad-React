import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Calc from './views/calc'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Calc} exact path="/calc" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
