import  { Component } from "react";




class UpdatingPhase extends Component{
  state={
    count:0
  }
  increment=()=>{
    this.setState({
        count:this.state.count+5
    })
  }
  shouldComponentUpdate(){
    //we use in optimization purpose  , in pure components
    return true
    //return false it will stop the reluts to procced
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
console.log(prevState,"previouse state")
return null

  }
componentDidMount(){
    console.log("did update")
    document.title=`Current count ${this.state.count}`
}
componentDidUpdate(){
    console.log("did update")
    document.title=`Current count ${this.state.count}`
}
    render(){
        console.log("render")
        return(
            <>

            <h1>Counter example{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
}
export default UpdatingPhase