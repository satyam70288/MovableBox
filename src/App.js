
import React, { useState,useRef,useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <DraggableBox />
    </div>
  );
}

function DraggableBox() {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x:0 , y: 0 });
  const [divWidth, setDivWidth] = useState(null);
  const [divheight, setDivHeight] = useState(null)
  const divRef = useRef(null);

  // const divElement = document.getElementsByClassName('draggable-box');
  useEffect(() => {
    // Function to update the div width
    const updateDivWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
        setDivHeight(divRef.current.offsetheight);
      }
    };
    updateDivWidth();

    // Attach a resize event listener to update the width when the window is resized
    window.addEventListener('resize', updateDivWidth);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateDivWidth);
    };
  }, [divWidth]);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log("width" + divWidth)
    console.log("height" + divheight)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    let newX = e.clientX - offset.x;
    let newY= e.clientY - offset.y;
    // Ensure the box sticks to the left (200 pixels)
    // x0 axis
    if (newX < 100) {
      newX = 0;
    }

  // x0axis with y0 axis
     if (newX < 100) {
      if(newY < 100){
      newX = 0;
      newY=0;
      }
    }

  //y0axis with x0 axis
    if (newY < 100) {
      if(newX < 100){
      newX = 0;
      newY=0;
      }
    }
    // x innerwith
    else if (newX  > window.innerWidth-divWidth+100) {
      newX= window.innerWidth-divWidth;
    }

    // x innerwith with y innerHeight
     if (newX+100   > window.innerWidth-divWidth) {
      if(newY > window.innerHeight-700){
      newX= window.innerWidth-divWidth;
      newY = window.innerHeight - 600;
      console.log(window.innerWidth)
      }
    }
    // y0 axis with x inner width
    if (newY < 100) {
      if(newX  > window.innerWidth-divWidth+100) {
        newX= window.innerWidth-divWidth;
      
      // newX = 0;
      newY=0;
      }
    }
     if (newY<100) {
      
      newY = 0;
    }
    
    
    else if (newY > window.innerHeight-650) {
      newY = window.innerHeight - 600;
    }

        setPosition({
      x: newX,
      y: newY
      
    });
    console.log(newX, newY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`draggable-box ${isDragging ? 'dragging' : ''}`}
       style={{ left: position.x, top: position.y }}
       ref={divRef}

      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ><div className='box' 
    // onMouseMove={handleMouseMove}
    // onMouseDown={handleMouseDown}
    // onMouseUp={handleMouseUp}
    >
      Drag me!
    </div>
      
    </div>
  );
}

export default App;
