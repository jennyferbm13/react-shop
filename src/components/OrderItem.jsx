import React from "react";
import "@style/OrderDetail.scss";
import close from "@icons/icon_close.png";
const OrderItem = (product) => {
  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
