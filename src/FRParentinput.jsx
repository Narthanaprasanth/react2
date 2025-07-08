import React,{ Component } from "react";
import FRInput from "./FRInput";

class FRParentinput extends Component{
    constructor(props) {
      super(props)
    
      this.inputref =React.createRef()  //[1]CREATE REF
    }
    clickhandler=()=>{
        this.inputref.current.focus()
    }
    render(){
        return(
            <div>
                {/* [2]ATTACHES TO CHILD COMPONENT INSTANCE */}
                <FRInput ref={this.inputref}/>  
                
                <button onClick={this.clickhandler}>Focusinput</button>
            </div>
        )
    }
}
export default FRParentinput




 