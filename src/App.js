
import React, { useState } from 'react';
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
  const [position, setPosition] = useState({ x: 200, y: 100 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    console.log(window.innerWidth)
    console.log(window.innerHeight)
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
    else if (newX+100   > window.innerWidth-900) {
      newX= window.innerWidth-800;
    }
    // x innerwith with y innerHeight
     if (newX+100   > window.innerWidth-900) {
      if(newY > window.innerHeight-700){
      newX= window.innerWidth-800;
      newY = window.innerHeight - 600;
      console.log(window.innerWidth)
      }
    }
    // y0 axis with x inner width
    if (newY < 100) {
      if(newX  > window.innerWidth-900) {
        newX= window.innerWidth-800;
      
      // newX = 0;
      newY=0;
      }
    }
     if (newY<100) {
      
      newY = 0;
    }
   
    // }
    
    
    // // else if (newY>400) {
    // //   newY = 400;
    // // }

    else if (newY > window.innerHeight-700) {
      newY = window.innerHeight - 600;
    }

    // else if (newX > 200) {
    //   newX = 200;
    // }
    // else if (newY>100 && newX<100) {
    //   newX = 0;
    //   newY = 0;
    // }
    // else if(newX >window.innerWidth-900 && newY >window.innerHeight-700){
    //   newX=window.innerWidth-800;
    //   newY=window.innerHeight-600
    // }
     
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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ><div className='box'>
      Drag me!
    </div>
      
    </div>
  );
}

export default App;
