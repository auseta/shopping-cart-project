import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/style.css';
import DATA from './data';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';


function App() {

  const [products, setProducts] = useState(DATA)

  const incrementProductAmount = (productName) => {
    const UPDATED_PRODUCTS_AMOUNT = products.map( product => {
      if ( product.name === productName ) {
        product.amount = product.amount + 1
      }
      return product
    })
    setProducts( UPDATED_PRODUCTS_AMOUNT )
  }

  const decrementProductAmount = (productName) => {
    const UPDATED_PRODUCTS_AMOUNT = products.map( product => {
      if ( product.name === productName && product.amount !== 0 ) {
        product.amount = product.amount - 1
      }
      return product
    })
    setProducts( UPDATED_PRODUCTS_AMOUNT )
  }

  const ACTIONS = {
    increment : incrementProductAmount,
    decrement : decrementProductAmount
  }

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={ <Shop products={ products } actions={ ACTIONS } /> }/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
