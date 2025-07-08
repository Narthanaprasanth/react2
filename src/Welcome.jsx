//----------[TYPE-1]-USING PROPS IN CLASS-------------

// import React,{Component} from "react";


// class Welcome extends Component{
//   render(){
//     return <h1>welcome {this.props.name} have {this.props.heroname}</h1>
//   }
// }
// export default Welcome


//------------[TYPE-2]- USING DESTRUCTIURING REMOVEING PROPS----------


import React,{Component} from "react";


class Welcome extends Component{
  render(){
    const{name,heroname}=this.props
    return <h1>welcome {name} have {heroname}</h1>
  }
}
export default Welcome


