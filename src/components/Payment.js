import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe()

const Payment = () => {

    return(
        <div>

        </div>
    )
}

export default Payment