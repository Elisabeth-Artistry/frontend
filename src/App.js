import React from 'react'
import { Route } from 'react-router'

import Header from './components/Header'
import GalleryCarousel from './components/GalleryCarousel'
import Payment from './components/Payment'


function App() {
  return (
    <div className="app">
      <Header />

      <Route exact path='/' component={GalleryCarousel} />
      <Route path='/payment' component={Payment} />
    </div>
  );
}

export default App;