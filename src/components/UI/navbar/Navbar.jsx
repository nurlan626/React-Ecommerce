import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./Navbar.css";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <nav className="navigation">
      <NavLink to="/" className="Link">
        Home
      </NavLink>
      <NavLink to="about" className="Link">
        About
      </NavLink>
      <NavLink to="allPosts" className="Link">
        All Posts
      </NavLink>
      {auth.user && (
        <NavLink to="profile" className="Link">
          Profile
        </NavLink>
      )}

      {!auth.user && (
        <NavLink to="login" className="Link">
          Login
        </NavLink>
      )}
      {auth.user && (
        <NavLink to="cart" className="Link">
          Cart
        </NavLink>
      )}
      <div to="#" className="user">
        {auth.user && (
          <div>
            {auth.user} <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <span></span>
    </nav>
  );
};

export default Navbar;
