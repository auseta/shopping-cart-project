import React, { useState, useEffect } from 'react';

const ShoppingCart = ({ products, remove }) => {

  const [ totalPrice, setTotalPrice ] = useState(0);

  useEffect( () => {
    let updatedTotalPrice = 0

    for (const product of products) {
      if (product.amount !== 0) {
        updatedTotalPrice += product.price
      }
    }
  
    setTotalPrice(updatedTotalPrice);
  },[products])

  return(
    <div className='shopping-cart'>
      <h2>Your products</h2>
      {
        products.map( (product,index) => (
          product.amount === 0 ? null : (
            <div className='shopping-cart-product' key={ index }>
                <h4>{ product.name } x { product.amount } - ${ product.price }</h4><i onClick={ ()=> remove(product.name) } className="fas fa-times-circle"></i>
            </div>
          )
        ))
      }
      <div className='shopping-cart-total-price'> Price to pay: ${ totalPrice }</div>
    </div>
  )
}

export default ShoppingCart;