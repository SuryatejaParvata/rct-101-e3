import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  // const {isAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link" >Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */} count : {}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>Login</button>
      
    </div>
  );
};

export default Navbar;
