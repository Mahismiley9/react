


const initialState={
    products:[]
}


export function productReducer(state=initialState,action){

    switch(action.type){
       case "PRODUCT_SUCCESS":
        return{...state,products:action.payload}
       case "ADD_NEW_PRODUCTS":
       return{...state,products:[...state.products,action.payload]}
       case "DELETE_PRODUCT":
        const id=action.payload
        const newProducts=state.products.filter(item=>item.id!==id)
        return{...state,products:newProducts}
        default:
            return state
    }
}