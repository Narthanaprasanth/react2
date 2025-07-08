import React,{Component} from "react"
class LifecycleB extends Component{
    constructor(props){
        super(props)
            this.state={
                name:'pizza'
            }
            console.log('Life cycle B constructor')
              
        }
        static getDerivedStateFromProps(props,state){
            console.log('life cycleB getderiverfromprops ')
            return null
        }
        componentDidMount(){
            console.log('Lifecycle B componentdidmount')
        }
        shouldComponentUpdate(){
            console.log('LifecycleB should component update')
        }

        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('LifecycleB getsnapShotbeforeupdate')
            return null

        }
        componentDidUpdate(){
            console.log('LifecycleB componentDidUpdate')
        }

    
        
    
    render(){
        console.log('lifecycle B render')
        return(
            <div>
               Life cycle B
            </div>
        )
    }

}
export default LifecycleB








