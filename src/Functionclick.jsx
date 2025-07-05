import React from "react"
function FunctionClick(){
   function clickhandler(){
    console.log("clicked")
    }
    return (
    <div>
        <button onClick={clickhandler}>CLICK</button>
    </div>)
}
export default FunctionClick