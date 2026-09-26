import React from 'react'
import useDate from './Components/CHook/useDate'
import { useState } from 'react'
import Child from './Components/Child';

const App = () => {

  const [text, setText] = useState('');

  const getText = (data) =>{
    setText(data);
  }


  return (
    <>
    <div>from child : {text}</div>

    <Child toParent={getText}/>
    </>
  )
}

export default App