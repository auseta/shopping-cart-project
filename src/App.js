import React, { useState } from 'react';
import './styles/style.css';
import Header from './components/Header';

function App() {
  const [ cart, setCart ] = useState(0)

  const incrementCart = () => {
    setCart( cart + 1 )
  }

  return (
    <div className="App">
      <Header cart={ cart } events={ incrementCart } />
    </div>
  );
}

export default App;
