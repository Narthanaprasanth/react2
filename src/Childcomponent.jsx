import React from "react"
function Childcomponent(props){
    return(
        <div>
            <button onClick={()=>props.greethandler('millliii')}>Greet Parent</button>
        </div>
    )
}
export default Childcomponent
