import React,{Component} from "react";
import Childcomponent from "./Childcomponent";

class Parentcomponent extends Component{
    constructor(props){
        super(props)

        this.state={
            Parentname:'Parent'
        }
            this.greetParent=this.greetParent.bind(this)

    }
    greetParent(childname){
        alert(`hello ${this.state.Parentname} from ${childname}`)
    }
    render(){
        return(
            <div>
                <Childcomponent greethandler={this.greetParent}/>
            </div>
        )
    }
}
export default Parentcomponent