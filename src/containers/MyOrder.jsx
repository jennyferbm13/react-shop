import React, { useContext, useState } from "react";
import "@style/ProductInfo.scss";
import OrderItem from "@components/OrderItem";
import arrow from "@icons/flechita.svg";
import AppContext from "@context/AppContext";
const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (acum, currentValue) => acum + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    //or setMenu(!menu)
  };

  if (menu == true) {
    return (
      <aside className="product-detail">
        <div className="title-container">
          <img src={arrow} alt="arrow" onClick={handleMenu} className="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((item) => (
            <OrderItem product={item} key={`orderItem-${item.id}`} />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>{" "}
      </aside>
    );
  }
};

export default MyOrder;
