import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../scss/cartIcon.scss'
import cart from '../../images/cart.png'

const CartIcon = () => {
    const items = useSelector(state => state.cartReducer.items.length)

    return (
        <Link to='/cart' className="cartIcon">
            <img src={cart} alt="cart" />
            <div className="itemLength">{items}</div>
        </Link>
    )
}

export default CartIcon