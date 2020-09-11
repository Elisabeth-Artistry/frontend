import React from 'react'
import { useSelector } from 'react-redux'

import Cart from './Cart'

const CartPage = () => {
    const subtotal = useSelector(state => state.cartReducer.subtotal)

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Cart />
            <p>Subtotal: {subtotal}</p>
            <button>Checkout</button>
        </div>
    )
}

export default CartPage