import React,{Component} from "react";
class Message extends Component{
    constructor(){
      super()
        this.state={
            Message:'Welcome Visitor'
        }
      }
      changebutton(){
        this.setState({
          Message:'Thankyou  For Subscribing'
        })
   }

  render(){
    return (
      <div>
          <h1>{this.state.Message}</h1>
          <button onClick={()=>this.changebutton()}>Subscibe</button>
      </div>
    )
    
  }
}

export default Message    