import React from 'react'
import { Route } from 'react-router'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import './scss/global.scss'

import Header from './components/Header'
import GalleryCarousel from './components/GalleryCarousel'
import CheckoutForm from './components/CheckoutForm'
import PatternList from './components/patterns/PatternList'
import PatternPage from './components/patterns/PatternPage'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="app">
        <Header />

        <Route exact path='/' component={GalleryCarousel} />
        <Route path='/payment' component={CheckoutForm} />
        <Route path='/patterns' component={PatternList} />
        <Route path='/pattern/:id' component={PatternPage} />
      </div>
    </Elements>
  );
}

export default App;