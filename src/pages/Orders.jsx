import React from "react";
import Order from "@components/Order";
import "@style/Order.scss";
const Orders = () => {
  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">My orders</h1>
        <div class="my-order-content">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Orders;
