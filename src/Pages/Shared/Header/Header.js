import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="nav-container">
      <nav className="nav-bar">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/blogs">BLOGS</NavLink>
        <NavLink to="/manageitem">MANAGE ITEM</NavLink>
        <NavLink to="/additem">ADD ITEM</NavLink>
        <NavLink to="/myitems">MY ITEMS</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </nav>
    </header>
  );
};

export default Header;
