import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaUser } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaAlignJustify className="nav-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home 
                </Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaUser /> 
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;