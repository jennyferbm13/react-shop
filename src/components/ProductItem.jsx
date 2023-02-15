import React, { useContext } from "react";
import "@style/ProductItem.scss";
import AppContext from "../context/AppContext";

import addCart from "@icons/bt_add_to_cart.svg";
const ProductItem = ({ product }) => {
  const { images, title, price } = product;
  const { state, addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart([item]);
    console.log(typeof Object.keys(state.cart).length);
    console.log(Object.keys(state.cart).length);
  };
  return (
    <div className="product-card">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
