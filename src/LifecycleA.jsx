import React,{Component} from "react"
class LifecycleA extends Component{
    constructor(props){
        super(props)
            this.state={
                name:'pizza'
            }
            console.log('Life cycle A constructor')
              
        }
        static getDerivedStateFromProps(props,state){
            console.log('life cycleA getderiverfromprops ')
            return null
        }
        componentDidMount(){
            console.log('Lifecycle A componentdidmount')
        }

        shouldComponentUpdate(){
            console.log('LifecycleA should component update')
        }

        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('LifecycleA getsnapShotbeforeupdate')
            return null

        }
        componentDidUpdate(){
            console.log('LifeCycleA componentDidUpdate')
        }
        changeState=()=>{
            this.setState({
                name:'code evolution'
            })
        }
    
    render(){
        console.log('lifecycle A render')
        return(
            <div>
               Life cycle A <br />
               <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }

}
export default LifecycleA




