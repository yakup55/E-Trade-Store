import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";
import {cart,carts} from "../initials/cartItems"
const initialVales = {
    cart,
    carts,
  };
  export default function cartReducer(state=initialVales,{type,payload}){
    switch (type) {
        case ADD_TO_CART:
            return{
                ...state,
                carts:[...state.carts,payload]
            }
    case REMOVE_TO_CART:
        return{
            ...state,
            carts:state.carts.filter((x) => x.productId !== payload)
        }
        default:
            return{
                ...state
            }
    }
  }