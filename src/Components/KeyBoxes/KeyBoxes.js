import React from "react";
import "./KeyBoxes.css";

export function KeyBoxes() {
    return (
      <div id="insert">
        <div className=" key">
          a <small>event.key</small>
        </div>

        <div className=" key">
          65 <small>event.keyCode</small>
        </div>

        <div className=" key">
          KeyA <small>event.code</small>
        </div>

        <div className=" key">
          Press any key to get the keyCode
                
        </div>
      </div>
    );
}