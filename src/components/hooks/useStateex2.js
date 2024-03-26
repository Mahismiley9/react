import { useState } from "react"




const UseStateEXample2 =()=>{
    const[timer,setTimer]=useState(100)
    const handleTimer=()=>{
        setInterval(()=>{
            // console.log("log")
            setTimer(time=>time-1)
        },2000)
    }
        return(
        <>
        <h1>Timer value {timer}</h1>
        <button onClick={handleTimer}>Start timer</button>
        
        </>
    )
}
export default UseStateEXample2