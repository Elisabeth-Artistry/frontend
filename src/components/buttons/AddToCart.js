import React from 'react'
import { useDispatch } from 'react-redux'

import { addPattern } from '../../actions/cart'

const AddToCart = ({ pattern }) => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(addPattern(pattern))}>Add to Cart</button>
    )
}

export default AddToCart