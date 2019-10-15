import React from 'react'
import logo from './logo.svg'
import './css/App.scss'
import './css/loader.scss'

import Header from './containers/Header'
import Routes from './containers/Routes'
import Footer from './containers/Footer'

import { StripeProvider } from 'react-stripe-elements'

function App() {
  console.log(process.env)
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </StripeProvider>
  );
}

export default App;
