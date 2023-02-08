import React from "react";
import Order from "../components/Order";
import OrderItem from "../components/OrderItem";
const Orders = () => {
  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">My order</h1>

        <div class="my-order-content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
