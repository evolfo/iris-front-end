import React from 'react'
import logo from './logo.svg'
import './css/App.scss'
import './css/loader.scss'

import Header from './containers/Header'
import Routes from './containers/Routes'
import Footer from './containers/Footer'

import { StripeProvider } from 'react-stripe-elements'

function App() {
  return (
    // <StripeProvider apiKey="pk_test_HhZdCVKoBWxT0ij7LTQggfyL0018D3iKp9">
    <StripeProvider apiKey="pk_live_Z2qNecBhHl7Jtd9qZgDqrsuC0006uHrfV9">
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </StripeProvider>
  );
}

export default App;

