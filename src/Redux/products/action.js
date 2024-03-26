


export function productAction(data){
    return{
        type:"PRODUCT_SUCCESS",
        payload:data
    }
}

export function deletePeoductAction(id){
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
}


export function addNewProductAction(data){
    return{
        type:"ADD_NEW_PRODUCTS",
        payload:data
    }
}