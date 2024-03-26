

const initailState={
    counter:0,
    totalChocolates:100,
    availableChocolates:100
}

 export function reducerCounter(state=initailState,action){
    switch(action.type){
        case "INCREMENT":
            return{...state,counter:state.counter+1}
            case "BUY_CHOCOLATE":
                return{...state,availableChocolates:state.availableChocolates-action.payload}
                case "RETURN_CHOCOLATE":
                    return{...state,availableChocolates:state.availableChocolates+action.payload}
            default:
                return state
    }
 }