import { Component, PureComponent } from "react";
import Regularcomponent from "./Regularcomponent";
import Purecomp from "./Purecomp";
import Memocomp from "./Memocomp";

class Parentcom extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'viswas'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'viswas'
            })
        },2000)
    }
    render(){
        console.log('**************Parent comp render************')
        return(
            <div>
                Parent Component
                {/* <Regularcomponent name={this.state.name}/>
                <Purecomp name={this.state.name}/> */}
                <Memocomp name={this.state.name}/>
            </div>
        )
    }
}
export default Parentcom












