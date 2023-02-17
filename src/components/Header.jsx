import React, { useState, useContext } from "react";
import "@style/Header.scss";
import menuImg from "@icons/icon_menu.svg";
import Menu from "@components/Menu";
import logoImg from "@logos/logo_yard_sale.svg";
import shoppingCard from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [shopCart, setShopCart] = useState(false);
  const { state } = useContext(AppContext);
  const handleMenu = () => {
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    //or setMenu(!menu)
  };

  const handleShopCart = () => {
    setShopCart(!shopCart);
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
          <li className="navbar-shopping-cart" onClick={handleShopCart}>
            {/*<li className="navbar-shopping-cart" onClick={() => setShopCart(!shopCart)}>*/}
            <img src={shoppingCard} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {menu && <Menu />}
      {shopCart && <MyOrder />}
    </nav>
  );
};

export default Header;
