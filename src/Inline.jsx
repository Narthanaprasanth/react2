
//------CSS INLINE STYLING----------------
import React from "react"
const heading={
    fontSize:'72px',
    color:'blue'
}
function Inline(){
    return(
        <div>
            <h1 style={heading}>Inline</h1>
             <h1 className="error">ERROR</h1>
        </div>
    )
}
export default  Inline







































