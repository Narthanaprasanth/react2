
//------CSS INLINE STYLING----------------

import React from "react"

const heading={
    color:'blue',
    fontSize:'72px'    
}

function Inline(){
    return(
        <div>
            <h1 style={heading}>Inline</h1>
            <h1 className="error">Error</h1>

        </div>
    )
}
export default Inline