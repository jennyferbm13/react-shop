import React, { useContext } from "react";
import "@style/ProductInfo.scss";
import OrderItem from "@components/OrderItem";
import arrow from "@icons/flechita.svg";
import AppContext from "@context/AppContext";
const MyOrder = () => {
  const { state } = useContext(AppContext);
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {state.cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
