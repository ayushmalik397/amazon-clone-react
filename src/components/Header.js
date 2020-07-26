import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="search" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="option-lineOne">Hello</span>
            <span className="option-lineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="option-lineOne">Returns</span>
            <span className="option-lineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="option-lineOne">Try</span>
            <span className="option-lineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header-link">
        <div className="option-cart">
          <div className="option-checkout">
            <span className="option-lineTwo basket-count">
              {basket?.length}
            </span>
            <span>
              <ShoppingCartIcon />
            </span>
          </div>
          <span className="cart-text">Cart</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
