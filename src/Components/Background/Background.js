/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from "react";
import "./Background.css";

export function Background() {
    return (
      <>
        {" "}
        <header>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          />
        </header>
        <div className="slider-container">
          
          {/* <div  className="slide active" style="
                        backgroundImage:
                            url('https://joyfoodsunshine.com/wp-content/uploads/2018/09/easy-homemade-pizza-dough-5-768x768.jpg');"
          ></div> */}
          {/* <div
            className="slide"
            style="
            background-image:
              url('https://joyfoo'dsunshine.com/wp-content/uploads/2018/09/easy-homemade-pizza-dough-5-768x768.jpg');"
          ></div>
          <div
            className="slide"
            style="
            background-image:
              url('https://joyfoo'dsunshine.com/wp-content/uploads/2018/09/easy-homemade-pizza-dough-5-768x768.jpg');"
          ></div> */}
          <button className="arrow left-arrow" id="left">
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>
          </button>

          <button className="arrow right-arrow" id="right">
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </>
    );
}