import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
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
      <Link to="/checkout">
        <div className="option-checkout"></div>
      </Link>
    </nav>
  );
}

export default Header;
