import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/style.css';
import DATA from './data';
import shoppingCartProductsData from './shoppingCartProductsData.js';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';


function App() {

  const [ productsInCart, setProductsInCart ] = useState(shoppingCartProductsData)
  const [ products, setProducts ] = useState(DATA)

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

  const addProductToCart = (productName) => {
    const product = products.find(element => element.name === productName);
    const UPDATED_PRODUCTS_AMOUNT = [...productsInCart];
    UPDATED_PRODUCTS_AMOUNT.map( productInCart =>(
      productInCart.name === productName ? productInCart.amount = product.amount : null  
    ))
    setProductsInCart(UPDATED_PRODUCTS_AMOUNT)
  }

  const ACTIONS = {
    increment : incrementProductAmount,
    decrement : decrementProductAmount,
    add : addProductToCart,
  }

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={ <Shop products={ products } actions={ ACTIONS } /> }/>
            <Route path='/shopping-cart' element={ <ShoppingCart products={ productsInCart } /> } />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
