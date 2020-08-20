import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';
import Routes from '../routes';
import HomePage from '../main/homePage';

function App() {
  return (
    <div className='mainWrapper' >
      <Router >
        <Header />
        <HomePage />
        <Footer />
      </Router>
    </div >
  );
}

export default App;