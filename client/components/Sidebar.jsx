import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div>
        <div className="sidebar">
        <Link className="add"to='/add'>Add</Link>
        <Link className="search"to='/search'>Search</Link>
        <Link className="list"to='/list'>List</Link>
        <Link className="wanted"to='/wanted'>Wanted</Link>
      </div>
      </div>
    )
}

export default Sidebar

