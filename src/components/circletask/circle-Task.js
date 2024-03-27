import { Component } from "react";
import "./styles.css"



class CircleTask extends Component{
    constructor(){
        super()
        this.state={
            circles:[true]
        }
    }
    addCircles=()=>{
  let newState=[...this.state.circles,false]
  this.setState({
    circles:newState
  })
    }
    changeColor=(index)=>{
alert(index)
console.log(index,this.state.circles)
    }

    render(){
        return(
            <>
            <h1>Circle task</h1>
            <button onClick={this.addCircles}>add circles{this.state.circles.length}</button>
            {
                this.state.circles.length>0
                ?
                this.state.circles.map((flag,index)=> <div key={index} className="circle" style={
                    {backgroundColor:flag?"black":"hotpink"}
                } onClick={()=>this.changeColor(index)}>

                </div>
                
                )
                :
                <h2>no circles</h2>
            }
           

            </>
        )
    }
}
export default CircleTask


//it is a class base component
