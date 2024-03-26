import { useState } from "react"



const UseStateExample1=()=>{
 const [counter,setCounter]= useState(0)

 //this function used to increment the current counter by value 1
//  const handleIncrement=()=>{
// // setCounter(count=>count+1)
// setCounter(counter+2)
//  }
const handleChange=(value)=>{
    setCounter(counter+2)  
    switch(value){
        case "increment":
            setCounter(counter+1)
            break
            case "decrement":
                setCounter(counter-1)
                break
                case "reset":
                    setCounter(0)
            default:
                break
    }
}
    return(
        <>
        <h1>
            Use state example
        </h1>
        <h3>Current counter value  {counter}</h3>
        <button onClick={()=>handleChange("increment")}>increment</button>
        <button onClick={()=>handleChange("decrement")}>decrement</button>
        <button onClick={()=>handleChange("reset ")}>reset</button>
        </>
    )
}
export default UseStateExample1