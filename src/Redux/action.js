



export function incrementAction(){
    const action={ 
        type:"INCREMENT"
    }
    return action
}
export function buyChocolateAction(noOfChocolates){
    return{
        type:"BUY_CHOCOLATE",
payload:noOfChocolates
        
    }
     
}
export function returnChocolateAction(noOfChocolates){
    return{
        type:"RETURN_CHOCOLATE",
payload:noOfChocolates
        
    }
    
}