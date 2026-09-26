import React from 'react'
import { useState } from 'react'

const Child = ({toParent}) => {
    const [data, setData] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;

        setData(value);
        toParent(value);
    }
  return (

    <div>
        <input type="text" name="" id="" value={data} onChange={handleChange}/>
    </div>
  )
}

export default Child