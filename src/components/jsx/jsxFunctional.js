const JsxFunctional = ()=>{
   const object={
    name:"mahesh",
    age:24,
    width:150,
    height:160
   }
     return(
        <div>
        <h2> hello there!! {object.name}</h2>
        <h3>{object.age}</h3>
        <button onClick={()=>{}}>Click</button>
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width={object.width} height={object.height}></img>
        <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
</>


  </div> 
    )
}
export default JsxFunctional