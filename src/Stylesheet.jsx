import React from "react"
import './myStyle.css'
function Stylesheet(props){
      let classname = props.primary ? 'primary' : ''

    return(
        <div>
            <h1 className={`${classname} font-xl`}>stylesheets</h1>
        </div>
    )
}
export default Stylesheet





