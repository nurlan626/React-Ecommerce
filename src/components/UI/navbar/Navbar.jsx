import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/user";
import "./Navbar.css";


const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  const cartLenght = useSelector(state => state.cart)

  const handleLogout = () => {
    dispatch(logout())
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
      {user && (
        <NavLink to="profile" className="Link">
          Profile
        </NavLink>
      )}

      {!user&& (
        <NavLink to="login" className="Link">
          Login
        </NavLink>
      )}
      {user && (
        <NavLink to="cart" className="Link">
          Cart ({cartLenght.length})
        </NavLink>
      )}
      <div to="#" className="user">
        {user && (
          <div>
            {user.name} <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <span></span>
    </nav>
  );
};

export default Navbar;
