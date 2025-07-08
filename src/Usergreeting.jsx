import { Component } from "react";
import Message from "./Message";

class UserGreeting extends Component{
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:true
        }
    }

    //-----CONDITIONAL RENDERING [TYPE-1]------------
//     render(){
//        if(this.state.isLoggedIn){
//         return <div>Welcome kiinnm.....</div>
        
//        }else{
//         return(
//             <div>welcome guest...</div>
//         )
//        }
// }



//--------CONDITIONAL RENDERING USING MESSAGE VARIABLES[TYPE-2]-----------
// render(){
//     let Message
//     if(this.state.isLoggedIn){
//         Message=<div>welcome  kinnnm..</div>
//     }else{
//         Message=<div>welcome guestt..</div>
//     }

// return <div>{Message}</div>
// }



//......CONDITIONAL RENDERING USING TERNARY CONDITIONAL OPERATOR-----------
    
// render(){
//     return(
        
//             this.state.isLoggedIn ? 
//             <div>welcome kinm..</div> : 
//             <div>welcome guest..</div>
       
//     )
// }


//------CONDITIONAL RENDERING SHORT CIRCUIT OPERATOR METHOD------------

render(){
    return(
        this.state.isLoggedIn && <div>welcome kinmmm</div>
    )
}

}
export default UserGreeting














