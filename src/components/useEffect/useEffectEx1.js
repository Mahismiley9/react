import { useEffect, useState } from "react"




const UseEffectEx1=()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(1)
    useEffect(()=>{
        document.title=`current count ${count}`
        console.log("use effect")
    },[count,count1])
 
    return(
        <>
        <h1>Use effect hook ex</h1>
        <h2>current count {count}</h2>
        <button onClick={()=>{setCount(count+1)}}> count increment</button>

______________________________________________
<h2>current count {count1}</h2>

        <button onClick={()=>{setCount1(count1+1)}}> count 1 increment</button>
        </>
    )
}
export default UseEffectEx1