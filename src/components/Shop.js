import React from "react";

const Shop = ({ products, actions }) => {

  return (
    <div className="shop" >
      {products.map((product, index) => (
        <div className="item" key={ index }>
          <img src={ product.img } alt="product" />
          <h4>{product.name}</h4>
          <h4 className="item-price">$500</h4>
          <div className="item-buttons">
            <button className="amount-button" onClick={ () => actions.decrement(product.name) } >-</button>
            <span>{ product.amount }</span>
            <button className="amount-button" onClick={ () => actions.increment(product.name) } >+</button>
          </div>
          <button className="add-button" >Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
