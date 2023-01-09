import React from 'react';

const ShoppingCart = ({ products }) => {

  console.log(products);

  return(
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      {
        products.map( (product,index) => {
          if ( product.amount !== 0 ) {
            return(
              <div className='shopping-cart-product' key={ index }>
                <h6>{ product.name } x { product.amount }</h6>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default ShoppingCart;