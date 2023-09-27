
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
  const [size, setSize] = useState(0)
  // const [divWidth, setDivWidth] = useState({width:null,height:null});
  // const [divheight, setDivWidth] = useState(null)
  // const divRef = useRef(null);
  
  const divElement = document.getElementsByClassName('draggable-box');
  useEffect(() => {
    const val=getComputedStyle(document.documentElement)
    .getPropertyValue('--size')
    Number(val);
    console.log(val);
    setSize(Number(val))
    
  }, []);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console .log(typeof(size))
    console.log((window.innerWidth -size)+100)
    // console.log("width" + divWidth.width)
    // console.log("width" + divWidth.height)
    console.log(size)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    let newX = e.clientX - offset.x;
    let newY= e.clientY - offset.y;
    
    // x0 axisS
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
     if (newX  > window.innerWidth-(Number(size))+100) {
      newX= window.innerWidth-Number(size);
    }

    // x innerwith with y innerHeight
     if (newX   > window.innerWidth-Number(size)+100) {
      if(newY > window.innerHeight-Number(size)+100){
      newX= window.innerWidth-Number(size);
      newY = window.innerHeight - Number(size);
      console.log(window.innerWidth)
      }
    }
    // y0 axis with x inner width
    if (newY < 100) {
      if(newX  > window.innerWidth-Number(size)+100) {
        newX= window.innerWidth-Number(size);
      
      // newX = 0;
      newY=0;
      }
    }
     if (newY<100) {
      
      newY = 0;
    }
    
    
     if (newY > window.innerHeight-Number(size)+100) {
      newY = window.innerHeight - Number(size);
    }
    if (newY > window.innerHeight-Number(size)+100) {
      if(newX   > window.innerWidth-Number(size)+100){
        
      newX= window.innerWidth-Number(size);
      newY = window.innerHeight - Number(size);
      console.log(window.innerWidth)
      }
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
      //  ref={divRef}

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
