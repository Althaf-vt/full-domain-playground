import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const ColorChangeText = () => {

    const colorRef = useRef();
    const [color, setColor] = useState('');

    const handleClick = () => {
      colorRef.current.style.color = color;
    }

    

  return (
    <div>
        <h1 ref={colorRef}>Color change text</h1>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button onClick={handleClick}>change</button>
    </div>
  )
}

export default ColorChangeText