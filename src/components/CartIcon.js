import React from 'react'
import { useSelector } from 'react-redux'

import cart from '../images/cart.png'

const CartIcon = () => {
    const items = useSelector(state => state.cartReducer.length)

    return (
        <span>
            <img src={cart} alt="cart" />
            <div>{items}</div>
        </span>
    )
}

export default CartIcon