import { Component } from "react"



// whenever we removing elements from DOM, there is chance of memory leaks in the app 
// which slow downs the app 
// to cleanup the memory leaks,while unmounting we use component will unmount 


class Parent extends Component{
    constructor(){
        super()
        this.state={
            isChildVisible:true
        }
    }
    toggleChild=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
            <h2> i am parent</h2>
            <button onClick={this.toggleChild}>toggle the child</button>
            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h1> child hidden</h1>
            }
            </>
        )
    }
}
export default Parent

class Child extends Component{
    componentWillUnmount(){
        alert("child is removed from dom")
        console.log("we can clear the memory leaks")
    }
    render(){
        return(
            <h1>child visible</h1>
        )
    }
}