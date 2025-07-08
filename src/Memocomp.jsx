import React from "react"
function Memocomp({name}){
    console.log('rendering Memo component')
    return(
        <div>
            {name}
        </div>
    )
}
export default React.memo(Memocomp) 































