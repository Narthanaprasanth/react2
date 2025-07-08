import React from "react"
function Childcomponent(props){
    return(
        <div>
            <button onClick={()=>props.greethandler('childrensss')}>Greet Parent</button>
        </div>
    )
}
export default Childcomponent




