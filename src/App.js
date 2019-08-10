import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './containers/Header'
import LunetribeHome from './containers/LunetribeHome'
import Footer from './containers/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <LunetribeHome />
      <Footer />
    </div>
  );
}

export default App;
