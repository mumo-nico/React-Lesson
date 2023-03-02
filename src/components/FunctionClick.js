//rfce function component
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
    <button onClick={clickHandler}>FunctionClick</button>
    </div>
  )
}
//event handlers we dont add the parantheses

export default FunctionClick