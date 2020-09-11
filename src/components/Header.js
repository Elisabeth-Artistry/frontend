import React from 'react'

import '../scss/header.scss'
import icon from '../images/icon.png'
import cart from '../images/cart.png'
import CartIcon from './cart/CartIcon'

const Header = () => {

    return (
        <header>
            <img src={icon} />
            <h1>Elisabeth Artistry</h1>
            <CartIcon />
        </header>
    )
}

export default Header