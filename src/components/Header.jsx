import React, { useState } from "react";
import "@style/Header.scss";
import menuImg from "@icons/icon_menu.svg";
import Menu from "@components/Menu";
import logoImg from "@logos/logo_yard_sale.svg";
import shoppingCard from "@icons/icon_shopping_cart.svg";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    //or setToggle(!toggle)
  };
  return (
    <nav>
      <img src={menuImg} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logoImg} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCard} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {menu && <Menu />}
    </nav>
  );
};

export default Header;
