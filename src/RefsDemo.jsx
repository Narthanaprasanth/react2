// --------------([TYPE-1] TO USE REF)----------------

import React, { Component } from "react";

class RefDemo extends Component{
    constructor(props){
        super(props)
        this.inputref=React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref)
    }
    clickhandler=()=>{
        alert(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}/>
                <button onClick={this.clickhandler}>click</button>
            </div>
        )
    }
}
export default RefDemo






//----------CALLBACK REF APPROACH ([TYPE-2]-TO USE REF)-----------------

// import React, { Component } from "react";

// class RefDemo extends Component{
//     constructor(props){
//         super(props)
//         this.inputref=React.createRef()
//         this.cbref=null
//         this.setcbref=elemet=>{
//             this.cbref=elemet
//         }
//     }
//     componentDidMount(){
//        if(this.cbref){
//         this.cbref.focus()
//        }
//     }
//     clickhandler=()=>{
//         alert(this.inputref.current.value)
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" ref={this.inputref}/>
//                 <input type="text" ref={this.setcbref}/>
//                 <button onClick={this.clickhandler}>click</button>
//             </div>
//         )
//     }
// }
// export default RefDemo








         




  