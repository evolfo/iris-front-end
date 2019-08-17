import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './containers/Header'
import Routes from './containers/Routes'
import Footer from './containers/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
