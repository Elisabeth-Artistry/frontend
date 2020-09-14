import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import '../scss/navbar.scss'

const Navbar = () => {
    const location = useLocation()

    if(location.pathname === '/checkout'){
        return null
    }
    
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/patterns'>Patterns</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
        </nav>
    )
}

export default Navbar