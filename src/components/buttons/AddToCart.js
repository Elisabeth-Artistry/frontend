import React from 'react'

import { addPattern } from '../../actions/cart'

const AddToCart = ({ pattern }) => {

    return (
        <button onClick={() => addPattern(pattern)}>Add to Cart</button>
    )
}

export default AddToCart