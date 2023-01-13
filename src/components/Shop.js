import React from "react";

const Shop = ({ products, actions }) => {

  return (
    <div className="shop" >
      {products.map((product, index) => (
        <div className="shop__product" key={ index }>
          <img className="shop__img" src={ product.img } alt="product" />
          <h4 className="shop__h4" >{product.name}</h4>
          <h4 className="shop__h4--product">${product.price}</h4>
          <div className="shop__amount">
            <button className="shop__button--amount" onClick={ () => actions.decrement(product.name) } >-</button>
            <span className="shop__span" >{ product.amount }</span>
            <button className="shop__button--amount" onClick={ () => actions.increment(product.name) } >+</button>
          </div>
          <button className="shop__button--product" onClick={ product.amount !== 0 ? () => actions.add(product.name) : null } >Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
