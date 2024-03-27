import axios from "axios"
import { useState } from "react"




const Controlled=()=>{
    const [username,setUsername]=useState("")
   const[userNameError,setUserUserError]= useState("")

    const usernameHandler=(event)=>{
       const username=event.target.value
        setUsername(username)
        if(username.length>16){
            // alert("username must be less than 5")
            setUserUserError("username must be less than 6")
        }else{
          setUserUserError("")
            let userInformation={
                username:username

            }
            console.log(userInformation)
        }


        console.log("user typing")
    }
    const loginApi =()=>{
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          //
          username:'kminchelle' ,
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then((response)=>console.log(response));
    }



    const submitHandler=(event)=>{
     event.preventDefault() 
      loginApi()

    } 
    return(
        <>
           <form onSubmit={submitHandler} >
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={username}
      onChange={usernameHandler}
    />
    {
        userNameError
        ?
        <h4 style={{color:"red"}}>{userNameError}</h4>:
        null
    }

   
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
    
    />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit 
  </button>
</form>
        </>
    )
}
export default Controlled