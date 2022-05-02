import React from 'react';
import { useState} from "react";

export default function TestComponent() {

    const [count, setCont] = useState(0);
    const [flag, setFlag] = useState(false);

    function handlerClick() {
        setTimeout(() => {
            setCont(c => c + 1);
            setFlag( f => !f);
        }, 100);
    }

console.log('render');

  return (
    <div>
        <button onClick={handlerClick}>Next</button>
        <h1 style={{color : flag ? 'blue' : 'black'}}>{count}</h1>
    </div>
  )
}
