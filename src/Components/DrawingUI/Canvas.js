import React from 'react';
//import  './DrawingUI.js';
import './DrawingUI.css';
import { useEffect, useRef, useState } from 'react';

 const DrawingUI = () => {
  const CanvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  
 

    useEffect(() => {
      const canvas = CanvasRef.current;
      canvas.width = 500;
      canvas.height = 500;
      
    var context = canvas.getcontext("2d");
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineWidth = 5;
      context.current = context;
    },[])
    
    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawing(true);
      nativeEvent.preventDefault();
    };

    const draw = ({ nativeEvent }) => {
      if (!isDrawing) {
        return;
      }
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
      contextRef.current.closePath();
      setIsDrawing(false);
    }

    return (
      <div>
        <canvas
          className="canvas"
          ref={CanvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        ></canvas>
        <div className="toolbox">
          <button id="decrease"> -</button>
          <span id="size"> 20</span>
          <button id="increase"> +</button>
          <input type="color" id="color" />
          <button id="clear">clr</button>
        </div>
      </div>

      
    );
  }

export default DrawingUI