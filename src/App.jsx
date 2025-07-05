// import React, { Component } from "react";
// import "./App.css";
// import Hello from "./hello.js";
// import Greet from "./Greet.jsx";
// import Welcome from "./Welcome.jsx";
// import Message from "./Message.jsx";
// import Counter from "./Counter.jsx";
// import FunctionClick from "./Functionclick.jsx";
// import Classclick from "./Classclick.jsx";
// import EventBind from "./EventBind.jsx";
// import Parentcomponent from "./Parentcomponent.jsx";
// import Usergreet from "./Usergreeting.jsx";
// import Namelist from "./Namelist.jsx";
// import Stylesheet from "./Stylesheet.jsx";
// import Inline from "./Inline.jsx";
// import './appstyles.css'
// import styles from './appstyle.module.css'
// import Form from "./Form.jsx";




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <h1 className='error'>ERROR</h1>
//         <h1 className={styles.success}>Success</h1>

//          <Inline/> */}
//         {/* <Message/> */}
//         {/* <Counter/> */}

//         {/* <Greet name="Bruzz" heroname="Doremon">
//               <p>This is Children Props </p>
//               </Greet>
//               <Greet name="Clark"heroname="Mickeymouse">
//                 <button>Action</button>
//                 </Greet>
//               <Greet name="Criss" heroname="Snowwhite"/>
//                  <Hello /> 
//                  <Welcome name="Bruzz" heroname="Doremon"/>
//                  <Welcome name="Clark"heroname="Mickeymouse"/>
//                  <Welcome name="Criss" heroname="Snowwhite"/> */}
//         {/* <FunctionClick/> 
//               <Classclick />  */}
//         {/* <EventBind/> */}
//         {/* <Parentcomponent/> */}
//         {/* <Usergreet/> */}
//         {/* <Namelist /> */}
//         <Form/>

//       </div>
//     );
//   }
// }

// export default App;












import React,{Component} from "react";
import './App.css'
import LifecycleA from "./LifecycleA";
import LifecycleB from "./LifecycleB";

class App extends Component{
  render(){
    return(
      <div className="App">
        <LifecycleA/>
        <LifecycleB/>
      
      </div>
    )
  }
}
export default App



       
