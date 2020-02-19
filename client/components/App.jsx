import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Header from './Header'
import Sidebar from './Sidebar'
import Add from './Add'
import Search from './Search'
import List from './List'
import Wanted from './Wanted'

const App = () => {
  return (
    <>
    <Router>
    <Header />
    <Route exact path='/' component={Sidebar} />
    <Route path='/add' component={Add} />
    <Route path='/search' component={Search} />
    <Route path='/list' component={List} />
    <Route path='/wanted' component={Wanted} />

    </Router>
    </>
  )
}

export default App
