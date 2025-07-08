import React from "react";

//------[TYPE -1]-USING PROPS------------
// const Greet=props=>{
//   const {name,heroname}=props
//     return(
//       <div>
//         <h1>
//             Hello {name} have {heroname}
//              </h1>
            
//       </div> 
//     )
  
// }







//-------[TYPE-2]-USING PROPS DESTRUCTURING--------------
const Greet=props=>{
    return(
      <div>
        <h1>
            Hello {props.name} have {props.heroname}
             </h1>
            {props.children}
      </div> 
    )
  
}

export default Greet

