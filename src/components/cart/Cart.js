import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './CartItem'

const Cart = () => {
    const cartItems = useSelector(state => state.cartReducer)

    return (
        <div>
            {cartItems.map(item => {
                return <CartItem item={item} />
            })}
        </div>
    )
}

export default Cart