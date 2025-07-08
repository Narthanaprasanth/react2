import { Component } from "react";

class Classclick extends Component{
    clickhandler(){
        console.log('button clicked')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickhandler}>CLICK ME</button>
            </div>
        )
    }
}
export default Classclick