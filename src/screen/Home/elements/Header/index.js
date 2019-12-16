import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Conpass</h1>

            <div className='header-navigation'>
                <Link className='navigation-link' to='/'>Home</Link>
                <Link className='navigation-link' to='/'>About</Link>
                <Link className='navigation-link' to='/'>Contact</Link>
            </div>
            
        </div>
    )
}

export default Header