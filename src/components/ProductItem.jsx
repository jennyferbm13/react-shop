import React, { useContext, useState } from "react";
import "@style/ProductItem.scss";
import AppContext from "@context/AppContext";

import addCart from "@icons/bt_add_to_cart.svg";
import addedCart from "@icons/bt_added_to_cart.svg";
const ProductItem = ({ product }) => {
  const { images, title, price } = product;
  const { state, addToCart } = useContext(AppContext);
  const itsProductAdded = () =>
    state.cart.some((item) => item.id === product.id) ? true : false;
  const handleCart = (item) => {
    addToCart(item);
  };
  return (
    <div className="product-card">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="cart" onClick={() => handleCart(product)}>
          {itsProductAdded() ? (
            <img src={addedCart} alt="" />
          ) : (
            <img src={addCart} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
