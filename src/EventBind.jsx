import React,{Component} from "react";
import Message from "./Message";

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
        Message:'Heelloo'
        }
        // this.clickhandler=this.clickhandler.bind(this)
    }
    // clickhandler(){
    //     this.setState({
    //         Message:'byeeee'
    //     })
    // }

    clickhandler=()=>{
        this.setState({
            Message:'gooodbyee'
        })
    }


    render(){
        return(
            <div>
                <div>{this.state.Message}</div>
                {/* ----BINDING THROUGH ARROW FUNCTION ---*/}
                {/* <button onClick={()=>this.clickhandler()}>CLICK</button> */}

                {/*------ BINDING IN CONSTRUCTOR--------- */}
                <button onClick={this.clickhandler}>CLICK</button>
            </div>
        )
    }
}
export default EventBind