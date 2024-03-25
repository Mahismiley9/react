import { Component, PureComponent } from "react";




class ParentComponent extends PureComponent{
constructor(){
    super()
    this.state={
        counter:0
    }
}
increment=()=>{
    this.setState({
        counter:this.state.counter+3
    })
}

    render(){
        console.log("parent rendering")
        return(
            <>
            <h2>hello guys</h2>
            <h2>{this.state.counter}</h2>
            <button onClick={this.increment}>increment</button>
            <ChildComponent counter={this.state.counter}/>
            </>
        )
    }
}
export default ParentComponent

class ChildComponent extends Component{
    render(){
        console.log("child rendering")
        return(
<>
<h2> i am a child</h2>
</>
        )
       
    }
}