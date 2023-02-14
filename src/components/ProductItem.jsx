import React from "react";
import "@style/ProductItem.scss";

import addCart from "@icons/bt_add_to_cart.svg";
const ProductItem = ({ product }) => {
  const { images, title, price } = product;
  return (
    <div className="product-card">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
