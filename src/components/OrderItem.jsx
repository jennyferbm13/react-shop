import React, { useContext } from "react";
import "@style/OrderDetail.scss";
import close from "@icons/icon_close.png";
import AppContext from "@context/AppContext";
const OrderItem = ({ product }) => {
  const { removeCart } = useContext(AppContext);
  const handleCart = (product) => {
    removeCart(product);
  };
  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        onClick={() => handleCart(product)}
        src={close}
        alt="close"
        className="close"
      />
    </div>
  );
};

export default OrderItem;
