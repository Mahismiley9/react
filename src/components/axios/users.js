
import React, { Component } from "react";
import axios from "axios";

class UsersData extends Component{

    constructor(){
        super()
        this.state={
            userCollection:[ ]
        }
    }

    fetchData=()=>{
//         fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(Response=>{
//     this.setState({
//         userCollection:Response.users

//     })
// });
axios.get('https://dummyjson.com/users')
.then(response=>{
    console.log(response)
    if(response.status===200){
        this.setState({
            userCollection:response.data.users
        })
    }else{
        alert("Something went wrong")
    }
    
});

    }
    render(){
        return(
            <>
            <h1>User collection</h1>
            <button onClick={this.fetchData}>Click to fetch user data</button>
            {
               this.state.userCollection.length>0 && this.state.userCollection.map(eachObject=>{
                    return(
                        <React.Fragment  key={eachObject.id}>
                        <h2>fullname : {`${eachObject.firstName} ${eachObject.lastName} ` }</h2>
                        <h2>Age :{eachObject.age}</h2>
                        <h3>--------------------------------</h3>
                        </React.Fragment>
                    )
                })
            }
            </>
        )
    }
}
 export default UsersData