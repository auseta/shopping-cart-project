import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [ cart, setCart ] = useState(0)

  const incrementCart = () => {
    setCart( cart + 1 )
  }

  return (
    <div className="App">
      <Header cart={ cart } events={ incrementCart } />
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/shop' element={ <Shop /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
