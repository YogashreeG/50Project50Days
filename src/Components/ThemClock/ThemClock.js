import React, { useState } from "react";
import "./ThemClock.css";

export function ThemClock() {
  // const hourEl = document.querySelector('.hour');
  //     const minuteEl = document.querySelector('.minute');
  //     const secondEl = document.querySelector('.second');
  //     const timeEl = document.querySelector('.time');
  //     const dateEl = document.querySelector('.date');
  //     const toggle = document.querySelector('.toggle');

  //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday"];
  //     const months = ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // toggle.addEventListener('click', (e) => {

  //     const html = document.querySelector('html')
  //     if (html.classList.contains('dark')) {
  //         html.classList.remove('dark')
  //         e.target.innerHTML = 'Dark mode'
  //     } else {
  //         html.classList.add('dark')
  //         e.target.innerHTML = 'Light mode'
  //     }
  // })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useState("true");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "dark" : "Light"));
  };

  //     function setTime() {
  //     const time = new Date();
  //     const month = time.getMonth()
  //     const days = time.getDay()
  //     const date = time.getDate();
  //     const hours = time.getHours()
  //     const hoursForClock = hours % 12
  //     const minutes = time.getMinutes()
  //     const seconds = time.getSeconds()

  //     hourEl.style.tramsform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  //     minuteEl.style.tramsform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 11, 0, 360)}deg)`
  //     secondEl.style.tramsform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 11, 0, 360)}deg)`

  //     timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} `
  //     dateEl.innerHTML = `${days[days]}, ${months[month]}<span className="circle">${date}</span>`;

  // }

  // const scale = (num, in_min, in_max, out_min, out_max) => {
  //     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  // }
  // setTime()

  return (
    <>
      <button className="toggle" onClick={{theme, toggleTheme}}>
        Dark mode
      </button>
      <div className="clock-container">
        <div className="clock">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle secound"></div>
          <div className="center-point"></div>
        </div>
        <div className="time">12:00</div>
        <div className="date">
          Monday, Nov<span className="circle"> 2</span>
        </div>
      </div>
    </>
  );
}


