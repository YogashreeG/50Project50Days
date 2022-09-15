import React from "react";
import "./VerticalSlider.css";

export function VerticalSlider() {
    return (
      <>
        <header>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          />
        </header>
        <div className="slider-container">
          <div className="left-slide">
            <div style={{ backgroundColor: "purple" }}>
              <h1>Natural Flower</h1>
              <p>all in pink</p>
            </div>
            <div style={{ backgroundColor: "orange" }}>
              <h1>Natural Flower</h1>
              <p>with it mountains</p>
            </div>
            <div style={{ backgroundColor: "yellow" }}>
              <h1>Natural Flower</h1>
              <p>in the wilderness</p>
            </div>
            <div style={{ backgroundColor: "blue" }}>
              <h1>Flying eagle</h1>
              <p>in the sunset</p>
            </div>
          </div>
          <div className="right-slide">
            <div
              style={{
                backgroundImage:
                  "Url(https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0)",
              }}
            ></div>

            <div
              style={{
                backgroundImage:
                  "https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0",
              }}
            ></div>

            <div
              style={{
                backgroundImage:
                  "https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0",
              }}
            ></div>

            <div
              style={{
                backgroundImage:
                  "https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0",
              }}
            ></div>
          </div>
          <div className="action-button">
            <div className="down-button">
              <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div className="up-button">
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </>
    );
}