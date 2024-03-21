// side effect:
// 1) http Request
// 2) dom manipulation
// 3) event listeners
// 4)timers and subscibtion
// 5)getDerivedStateFromProps-->this method is mainly used to initialize the this.state. based on the initial this.props.




import React, { Component } from "react";

import axios from "axios";
import CurcularSpinner from "../spinners/circular bar";
class MountingPhase extends Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={
    message:"good morning",
     users:[]
        }
    }

    componentDidMount(){
        axios.get("https://dummyjson.com/users")
        .then(response=>{
      this.setState({
        users:response.data.users 
      })
        })
     
    }
    
    render(){
        console.log("render")
        return(
            <>
            <h2>hi guys its Mounting time</h2>
            {
                this.state.users.length>0
                ?

                this.state.users.map(eachObject=>{
                    return(
                        <React.Fragment key={eachObject.id}> 
                       <h3>{eachObject.firstName}</h3> 
                        </React.Fragment>
                    )
                })
                :
                <CurcularSpinner/>
                
            }
            </>
        )
    }
}
export default MountingPhase