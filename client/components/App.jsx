import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'
import Add from './Add'

const App = () => {
  return (
    <>
    <Router>
    <Header />
    <Route exact path='/' component={Sidebar} />
    <Route path='/add' component={Add} />

    </Router>
    </>
  )
}

export default App
