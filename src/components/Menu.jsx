import React from "react";
import "@style/Menu.scss";
const Menu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/Orders" className="title">
            My orders
          </a>
        </li>

        <li>
          <a href="/MyAccount">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
