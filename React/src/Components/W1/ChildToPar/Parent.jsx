import React from 'react'
import { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [data, setText] = useState('');
    const fromChild = (text) => {
        setText(text);
    }

  return (
    <div>
        <h2>Data from Child : {data}</h2>
        <Child toParent={fromChild}/>
    </div>
  )
}

export default Parent