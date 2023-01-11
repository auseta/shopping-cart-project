import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'
import './styles/style.css';
import DATA from './data/data';
import shoppingCartProductsData from './data/shoppingCartProductsData';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';


function App() {

  const [ productsInCart, setProductsInCart ] = useState(shoppingCartProductsData);
  const [ cartProductsAmount, setCartProductsAmount ] = useState(0);
  const [ products, setProducts ] = useState(DATA);

  useEffect( () => {

    let amount = 0;
    for (const product of productsInCart) {
      amount += product.amount
    }
    setCartProductsAmount(amount)
  }, [productsInCart])

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
    const product = products.find(product => product.name === productName);
    const UPDATED_PRODUCTS_AMOUNT = [...productsInCart];
    UPDATED_PRODUCTS_AMOUNT.map( productInCart => {
      if ( productInCart.name === productName && productInCart.amount !== 0 ) {
        productInCart.amount += product.amount;
        productInCart.price += product.price * product.amount;
        product.amount = 0;
      } else if ( productInCart.name === productName && productInCart.amount === 0 ) {
        productInCart.amount = product.amount;
        productInCart.price = product.price * product.amount;
        product.amount = 0;
      }
      return true
    })
    setProductsInCart(UPDATED_PRODUCTS_AMOUNT);
  }

  const removeProductFromCart = (productName) => {
    const product = products.find(element => element.name === productName);
    const UPDATED_PRODUCTS_AMOUNT = [...productsInCart];
    UPDATED_PRODUCTS_AMOUNT.map( productInCart =>(
      productInCart.name === productName ? ( 
        productInCart.amount = 0,
        productInCart.price = product.price
      ) : null
    ))
    setProductsInCart(UPDATED_PRODUCTS_AMOUNT)
  }

  const ACTIONS = {
    increment: incrementProductAmount,
    decrement: decrementProductAmount,
    add: addProductToCart,
    remove: removeProductFromCart
  }

  return (
    <HashRouter>
      <div className="App">
        <Header amount={ cartProductsAmount } />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/shop' element={ <Shop products={ products } actions={ ACTIONS } /> }/>
            <Route path='/shopping-cart' element={ <ShoppingCart products={ productsInCart } remove={ ACTIONS.remove } /> } />
          </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
