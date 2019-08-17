import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './containers/Header'
import Routes from './containers/Routes'
import Footer from './containers/Footer'

import { StripeProvider } from 'react-stripe-elements';

function App() {
  return (
  	<StripeProvider apiKey="pk_test_HhZdCVKoBWxT0ij7LTQggfyL0018D3iKp9">
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </StripeProvider>
  );
}

export default App;
