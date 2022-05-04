import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignoutBtn = () => {
    signOut(auth);
  };

  return (
    <header className="nav-container">
      <nav className="nav-bar">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/blogs">BLOGS</NavLink>
        <NavLink to="/manageitem">MANAGE ITEM</NavLink>
        <NavLink to="/additem">ADD ITEM</NavLink>
        <NavLink to="/myitems">MY ITEMS</NavLink>
        {user ? (
          <button onClick={handleSignoutBtn} className="signout_btn">
            LOGOUT
          </button>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
