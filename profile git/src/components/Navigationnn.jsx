// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";
// import navlogo from "../Components/Images/navlogo.jpg";
import userIcon from "./Assets/userIcon.jpg"
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";

const NavigationBar = () => {

  const handleLogout = () => {
    // Clear local storage or perform any other logout operations
    localStorage.clear();

    Cookies.remove("token");

    // Redirect to the login page or any other page after logout
    // You can replace "/login" with your desired logout redirection path
    window.location.href = "/";
  };

  return (
    <>
      <div className="header-section">
        <div>&nbsp; Free shipping for orders over Rs 999</div>
        <div>India &nbsp; &nbsp; Support &nbsp; &nbsp; 7057598414</div>
      </div>

      {/* {isAuthenticated ? ( */}
      <div className="navbar">
        <div className="logo">
          {/* <img src={navlogo} alt="Logo" /> */}
        </div>
        <div className="nav-links">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/recipes" className="nav-link">
            Recipes
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link className="user-icon">
                <img src={userIcon} alt="User Icon" />
              </Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/user-profile">My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/cart">My Cart</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link onClick={handleLogout}>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;