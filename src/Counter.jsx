import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState(prevState =>({
            count:prevState.count+1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
    render(){
        return(
            <div>
                <div>
                Count -{this.state.count}<br></br>
                <button onClick={()=>this.incrementFive()}>count</button>
                </div>
            </div>
            
        )
    }
}
export default Counter