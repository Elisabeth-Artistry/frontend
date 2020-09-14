import React from 'react'
import { useLocation } from 'react-router-dom'

import '../scss/header.scss'

import icon from '../images/icon.png'
import CartIcon from './cart/CartIcon'

const Header = () => {
    const location = useLocation()

    if(location.pathname === '/checkout'){
        return null
    }

    return (
        <header>
            <img src={icon} />
            <h1>Elisabeth Artistry</h1>
            <CartIcon />
        </header>
    )
}

export default Header