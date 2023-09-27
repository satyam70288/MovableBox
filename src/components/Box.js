import React,{useState} from 'react'
import './Box.css'
const Box = () => {
  const[position,setPosition]=useState({x:0,y:0})
  const[toggle,setToggle]=useState(false)
  const [down, setDown]=useState({x:0,y:0})

    const handleMoveDown=(e) => {
       setToggle(true)
      setDown({
        x:e.clientX-position.x,
        y:e.clientY-position.y
      })
       console.log(down)
      // console.log(position)
      console.log(e.clientX, e.clientY)
    }
    const handleMouseUp=(e) => {
       setToggle(false)
      // console.log(toggle)
    }

    const handleMouseMove=(e) => {
      if(toggle){
        setPosition({
          x: e.clientX-down.x,
          y: e.clientY-down.y

        })
        console.log(position)

      }

    }

  return (
    <div className='box'>
        <div className='nav'onMouseUp={handleMouseUp} onMouseDown={handleMoveDown} onMouseMove={handleMouseMove}>
             
              </div>
    </div>
  )
}

export default Box