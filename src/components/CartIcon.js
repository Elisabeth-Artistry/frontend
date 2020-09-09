import React from 'react'
import { useSelector } from 'react-redux'

import '../scss/cartIcon.scss'
import cart from '../images/cart.png'

const CartIcon = () => {
    const items = useSelector(state => state.cartReducer.length)

    return (
        <span className="cartIcon">
            <img src={cart} alt="cart" />
            <div className="itemLength">{items}</div>
        </span>
    )
}

export default CartIcon