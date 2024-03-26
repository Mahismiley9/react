import { useState } from "react"



const UseStateExample3 =()=>{
    // const arr=["banana","apple","watermelon"] wrong way 
const[fruits,setFruits]=useState(["apple","banana","watermelon"])
// this function is to add dummy fruit in the current list
const addFruits=()=>{
    const newList=[...fruits,"new fruit"]
    setFruits(newList)

}

    return(
        <>
        <h2>Add listing</h2>
        <button onClick={addFruits}> add fruits</button>
        <ol>
        {
            fruits.map((eachFruit,index)=><li key={index}>{eachFruit}</li>)
        }</ol>
        </>
    )
}
export default UseStateExample3