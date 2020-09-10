import React from 'react'
import { NavLink } from 'react-router-dom'

import '../scss/navbar.scss'

const Navbar = () => {

    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/patterns'>Patterns</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
        </nav>
    )
}

export default Navbar