import React from "react";
import { HiFilter } from "react-icons/hi";
import "./style.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">my todo tasks</div>
      <div className="header__right">
        <input type="search" placeholder="search..." />
        <HiFilter className="header__icon" />
        <Link to="/form">
          <button>+</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
