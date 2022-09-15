import React from "react";
import "./Functionality.css";

export function Functionality() {
  const pre = () => {
    console.log("pre");
  };

  const next = () => {
    console.log("Next");
  };

  // next.addEventListener(`click`, () => {
  //   currentActive++;
  //   if (currentActive > circle.length) {
  //     currentActive = circle.length;
  //   }
  // });

  // prev.addEventListener("click", () => {
  //   currentActive++;
  //   if (currentActive < 1) {
  //     currentActive = 1;
  //   }
  //   update();
  // });
  // function update() {
  //   circle.forEach((circle, idx) => {
  //     if (idx < currentActive) {
  //       circle.classList.remove(`active`);
  //     } else {
  //       circle.classList.remove(`active`);
  //     }
  //   });
  //   const active = document.querySelectorAll(".active");
  //   console.log(active.length, circle.length);
  // }

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>
      <button className="btn" onClick={pre} id="prev">
        Prev
      </button>
      <button className="btn" id="prev" onClick={next}>
        Next
      </button>
    </div>
  );
}
