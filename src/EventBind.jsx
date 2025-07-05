import React,{Component} from "react"


class EventBind extends Component{
    constructor(props){
        super(props)

        this.state={
            message:"hello"
        }
        // this.clickhandler=this.clickhandler.bind(this)
    }
   
        clickhandler=()=>{
            this.setState({
                message:"Goodbye..."
            })
        }
    
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>CLICK</button>--->TYPE 1 FOR EVENT BINDING */}
                {/* <button onClick={()=>this.clickhandler()}>CLICK</button>   ------>TYPE 2 FOR EVENT BINDING*/}
                <button onClick={this.clickhandler}>CLICK</button>  
            </div>
        )
    }
}
export default EventBind
