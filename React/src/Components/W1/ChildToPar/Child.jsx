import React from 'react'
import { useState } from 'react'

const Child = ({toParent}) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
        toParent(value);
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange}/>
    </div>
  )
}

export default Child