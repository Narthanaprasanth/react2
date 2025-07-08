import { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'narthana'
        }
        console.log('lifecycle A construcot')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle A getderived state from props')
        return null
    }
    componentDidMount(){
        console.log('lifecycle A componentdidmount')
        return true
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponentupdate')
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Lifecycle A getsnapshortbeforeupdate')
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'code evolution'
        })
    }
    render(){
        console.log('lifrcycle A render')
        return ( 
        <div>
              <div> lifecycle A</div>
              <button onClick={this.changeState}>CHANGE STATE</button>
              <LifecycleB />
              </div>
            )
    }
}
export default LifecycleA






