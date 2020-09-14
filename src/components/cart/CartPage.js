import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Cart from './Cart'

import { startCheckout } from '../../actions/order'

const CartPage = () => {
    const subtotal = useSelector(state => state.cartReducer.subtotal)
    const cartItems = useSelector(state => state.cartReducer.items)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleCheckout = event => {
        event.preventDefault()
        dispatch(startCheckout())
        history.push('/checkout')
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Cart />
            <p>Subtotal: {subtotal}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default CartPage