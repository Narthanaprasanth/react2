import { Component } from "react";
import Childcomponent from "./Childcomponent";

export class Parentcomponent extends Component{
    constructor(props){
        super(props)

        this.state={
            parentname:'parent'
        }
        this.greetParent=this.greetParent.bind(this)

    }
    greetParent(childname){
        alert(`hello ${this.state.parentname} from ${childname}`)
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






















