import React, { Component } from "react"
import Input from "./Input"



class FocusInput extends Component{
    constructor(props) {
      super(props)
    
      this.componentref=React.createRef()
    }
    clickhandler=()=>{
        this.componentref.current.FocusInput()
    }
    
    render(){
        return(
            <div>
                <Input  ref={this.componentref}/>
                <button onClick={this.clickhandler}>FOCUS INPUT</button>
               
            </div>
        )
    }
}
export default FocusInput






