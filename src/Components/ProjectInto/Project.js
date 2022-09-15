import React from "react";
import "./ProjectInto.css";

export function ProjectInto() {


const search = document.querySelector(`search`);
const btn = document.querySelector(`btn`);
const input = document.querySelector(`input`);

btn.addEventListener(`click`, () => {
  console.log("addevent".addEventListener);
  search.classList.toggle(`active`);
  input.focus();
});



  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </header>
      <div className="search">
        <input className="input" type="text" placeholder="search...."></input>
        <button className="btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
}

// eslint-disable-next-line no-lone-blocks
{/*const search = document.querySelector(`search`);
const btn = document.querySelector(`btn`);
const input = document.querySelector(`input`);

btn.addEventListener(`click`, () => {
  console.log("addevent".addEventListener);
  search.classList.toggle(`active`);
  input.focus();
});*/}
