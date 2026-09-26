import React from 'react'
import { useState } from 'react'

const Disable_btn = () => {

    const [disabled,setDisabled] = useState(false)
  return (
    <div>
        <button disabled={disabled}>
            Click
        </button>
        <button onClick={() =>setDisabled(!disabled)}>
            disable button
        </button>
    </div>
  )
}

export default Disable_btn