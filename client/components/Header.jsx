import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
           <Link to='/'><img className="logo"src="/images/vinyl-logo.png" alt="logo"  /></Link>
            <h1>Vinyl Collection</h1>
        </div>
    )
}

export default Header