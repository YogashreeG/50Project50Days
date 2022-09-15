/* eslint-disable no-unused-vars */
import React from "react";
import "./NavStyling.css";

export function NavStyling() {
    
  // function NavStyling(props) {
  //   document.title = "Hidden Search Bar";

    return (
      <nav className="active" id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button  className="icon" id="toggle">
          <div className="line1"></div>
          <div className="line2"></div>
        </button>
      </nav>
    );
  }
