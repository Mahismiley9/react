import { useEffect, useState } from "react"



const UseEffectEx3=()=>{
    const[X,setX]=useState(null)
    const[Y,setY]=useState(null)
    useEffect(()=>{
window.addEventListener("mousemove",(event)=>{
// console.log("mouse moving event capturing",event)
setX(event.clientX)
setY(event.clientY)
console.log(event.clientX,"x-axis")
console.log(event.clientY,"y-axis")
})
return()=>{
    console.log("unmounting")
}
    },[])
    return(
        <>
        <h2>use effect</h2>
        <h2>X-axis{X}</h2>
        <h2>Y-axis{Y}</h2>
        </>
    )
}
export default UseEffectEx3