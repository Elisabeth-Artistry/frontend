import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import './scss/global.scss'

import Header from './components/Header'
import Navbar from './components/Navbar'
import GalleryCarousel from './components/GalleryCarousel'
import PatternList from './components/patterns/PatternList'
import PatternPage from './components/patterns/PatternPage'
import CartPage from './components/cart/CartPage'
import Checkout from './components/checkout/Checkout'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

function App() {

  return (
    <Elements stripe={stripePromise}>
      <div className="app">
        <Header />
        <Navbar />

        <Route exact path='/gallery' component={GalleryCarousel} />
        <Route path='/patterns' component={PatternList} />
        <Route path='/pattern/:id' component={PatternPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={Checkout} />
      </div>
    </Elements>
  );
}

export default App;