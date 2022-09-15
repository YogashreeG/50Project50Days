import React from "react";
import "./FaqBoxes.css";

export function FaqBoxes() {
    const toggles = document.querySelectorAll('.faq-toggle')
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
           toggle.parentNode.classList.toggle('active') 
        })
    })



    return (
      <>
        <header>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          />
        </header>
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          <div className="faq active">
            <h3 className="faq-title">Why shouldn't we trust atoms ?</h3>
            <p className="faq-text">They make up everything</p>
            <button className="faq-toggle">
              <i class="fa-solid fa-chevron-down"></i>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className="faq-container">
          <div className="faq active">
            <h3 className="faq-title">
              What do you call someone with no body and no nose?
            </h3>
            <p className="faq-text">Nobody Known</p>
            <button className="faq-toggle">
              <i class="fa-solid fa-chevron-down"></i>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div className="faq-container">
          <div className="faq active">
            <h3 className="faq-title">
              How many tickles does it take to ticket an octops?
            </h3>
            <p className="faq-text">They make up everything</p>
            <button className="faq-toggle">
              <i class="fa-solid fa-chevron-down"></i>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        
      </>
    );
}