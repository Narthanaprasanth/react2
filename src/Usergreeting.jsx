import { Component } from "react";
//----------CONDITIONAL RENDERING------------
export class Usergreet extends Component{
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:true
        }
    }
    // render(){
        //[1]-----CONDITIONAL RENDERING IF ELSE--TERNARY OPERATION-- CAN WRITE INSIDE JSX
        // return(
        //     this. state.isLoggedIn ? <div>Welcome Rixx</div> : <div>welcome Guest</div>
        // )
        //[2]--------IF ESLE INSIDE RENDER USING MESSAGE VARIABLE-----------

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome riyx</div>
        // }else{
        //     message=<div>Welcome guest</div>
        // }

        // return <div>{message}</div>


        //[3]-----NORMAL IF ELSE INSIDE RENDER---------------

        // if(this.state.isLoggedIn){
        //     return <div>welcome riyaa</div>
        // }else{
        //     return <div>welcome Guest</div>
        // }


        //[4]-------SHOT CIRCUIT OPERATOR--------------

        render(){
            return this.state.isLoggedIn && <div>Welcome rixx</div>
        }



        // return(
        //     <div>
        //   <div>Welcome Reethus</div>
        //   <div>Welcome Guest</div>
        //   </div>
        // )
    }
// }
export default Usergreet

