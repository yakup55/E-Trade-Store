export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_TO_CART="REMOVE_TO_CART"

export default function addToCart(cartItem){
    return function(dispacth){
        return dispacth({type:ADD_TO_CART,payload:cartItem})
    }
}
export  function removeToCart(cart){
return function(dispacth){
    return dispacth({type:REMOVE_TO_CART,payload:cart})
}
}