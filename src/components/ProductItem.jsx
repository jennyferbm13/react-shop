import React, { useState } from "react";
import "@style/ProductItem.scss";

const API = "https://api.escuelajs.co/api/v1/products";

import addCart from "@icons/bt_add_to_cart.svg";
const ProductItem = () => {
  const [cart, setCart] = useState([0]);
  const handleCart = () => {
    setCart([0]);
  };
  return (
    <div className="product-card">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleCart}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
