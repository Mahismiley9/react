import axios from "axios"
import React, { useEffect, useState } from "react"

import CurcularSpinner from "../spinners/circular bar"





const UseEffectEX2=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
   axios.get("https://fakestoreapi.com/products")
   .then((response)=>{
    if(response.status===200){ 
 setProducts(response.data)}
 else{
    alert("something went wrong")
 }
// console.log(response)
   })
    },[])

    return(
        <>
        <h2> useffect example</h2>
        {
            products.length>0
            ?
            products.map((eachObject)=>{
                return(
                    <React.Fragment key={eachObject.id}>
                    <h2>{eachObject.title}</h2>
                    <img src={eachObject.image}width={200} height={200}/>
                    <h4>{eachObject.price}</h4>
                    </React.Fragment>
                )
            })
            :
            <CurcularSpinner/>
        }
        </>
    )
}
 export default UseEffectEX2