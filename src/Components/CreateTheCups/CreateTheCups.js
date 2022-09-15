import React from "react";
import "./CreateTheCups.css";

export function CreateTheCups() {
  // const smallCups = document.querySelectorAll('.cup-small');
  //  const listers = document.getElementById('liters');
  //  const percentage = document.getElementById('percentage');
  // const remained = document.getElementById('remained');

  //  updateBigCup()

  // smallCups.forEach((cup, idx) => {
  //      cup.addEventListener('click', () => highlightCups(idx))
  // })
  // function highlightCups(idx) {
  //     if (smallCups[idx].classList.contains('full') && !smallCups[idx].
  //         nextElementSibling.classList.contains('full')) {
  //         idx--
  //     }
  //     smallCups.forEach((cup, idx2) => {
  //         if (idx2 <= idx) {
  //             cup.classList.add('full')
  //         } else {
  //             cup.classList.remove('full')
  //         }
  //     })
  //     updateBigCup()

  // }
  // function updateBigCup() {
  //     const fullCups = document.querySelectorAll(".cup-small.full").length
  //     const totalCups = smallCups.length

  //     if (fullCups === 0) {
  //         percentage.style.visibility = 'hidden'
  //         percentage.style.height = 0

  //     } else {
  //         percentage.style.visibility = 'visible'
  //         percentage.style.height = `${fullCups / totalCups * 330}px`
  //          percentage.innerText = `${(fullCups / totalCups) * 100}%`
  //     }
  // }
  const cups = () => {
    document.title = "Drink Water";

    const SmallCups = document.querySelectorAll(".cups-small");

    const percentage = document.getElementById("percentage");

    SmallCups.forEach((cup, idx) => {
      cup.addEventListener("click", () => handleClick(idx));
    });

    updateBigCup();

    function handleClick(idx) {
      SmallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
          cup.classList.add("full");
        } else {
          cup.classList.remove("full");
        }
      });
      updateBigCup();
    }

    function updateBigCup() {
      const FullCups = document.querySelectorAll(".cup.cups-small.full").length;
      const TotalCups = SmallCups.length;

      if (FullCups === 0) {
        percentage.style.height = `${0}px`;
      } else {
        percentage.style.height = `${(FullCups / TotalCups) * 330}px`;
      }
    }


    

    return (
      <>
        <>
          <h1>Drink water</h1>
          <h3>Goal: 2 liters</h3>

          <div className="cup">
            <div className="remained" id="remained">
              <span id="liters"></span>
              <small>Remained</small>
            </div>
            <div className="percentage" id="percentage">
              20%
            </div>
          </div>
        </>
        <p className="text">
          {" "}
          Select how many glasses of water that you have drank
        </p>
        <div className="cups">
          <div className="cup cup-small">250ml</div>
          <div className="cup cup-small">250ml</div>
          <div className="cup cup-small">250ml</div>
          <div className="cup cup-small">250ml</div>
          <div className="cup cup-small">250ml</div>
          <div className="cup cup-small">250ml</div>
        </div>
      </>
    );
  }
}