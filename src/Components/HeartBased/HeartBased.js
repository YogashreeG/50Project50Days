import React from 'react'
import "./HeartBased.css"
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function HeartBased() {
    return (
      <>
        <header>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            
          />
        </header>
        
          <h3>
            Double Click on the image to 
                  <i class="fa-solid fa-heart"></i>
            
                </h3>
                <small>You like it<span id='time'> 0</span>times</small>
        <div className='loveMe'></div>
      </>
    );
}

export default HeartBased