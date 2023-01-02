import React from "react";
import components from "../data";

const Shop = () => {
  console.log(components);
  return (
    <div className="shop">
      {components.map((component, index) => (
        <div className="item" key={ index }>
          <img src={ component.img } alt="product" />
          <h4>{component.name}</h4>
          <h4 className="item-price">$500</h4>
          <div className="item-buttons">
            <button className="amount-button" >-</button>
            <span>0</span>
            <button className="amount-button" >+</button>
          </div>
          <button className="add-button">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
