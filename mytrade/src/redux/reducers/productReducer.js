import {
  GET_ADD_PRODUCT,
  GET_DELETE_PRODUCT,
  GET_LAST_PRODUCT,
  GET_LIST_BY_STRING,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_WITH_DETAILS,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST2,
  GET_UPDATE_PRODUCT,
  POPULAR_PRODUCT,
  PRODUCT_ACTIVE,
  PRODUCT_BRAND,
  PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_LIST,
  PRODUCT_COLOR_LIST,
  PRODUCT_NUMBER_LIST,
  PRODUCT_PASSIVE,
  PRODUCT_PRICE1,
  PRODUCT_PRICE2,
  PRODUCT_PRICE3,
  PRODUCT_PRICE4,
  PRODUCT_PRİCE_GROWING_LIST,
  PRODUCT_PRİCE_SINKING_LIST,
  PRODUCT_SIZE_LIST,
} from "../actions/productActions";
import { products, product } from "../initials/productItems";

const initialVales = {
  products,
  product,
};

export default function productReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case GET_ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case GET_UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((x) => x.productId !== payload.productId),
          payload,
        ],
      };
    case GET_DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter((x) => x.productId !== payload)],
      };
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: payload,
      };
    case GET_ONE_PRODUCT_WITH_DETAILS:
      return {
        ...state,
        product: payload,
      };
    case GET_LAST_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_CATEGORY:
      return {
        ...state,
        products: payload,
      };
    case POPULAR_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_ACTIVE:
      return {
        ...state,
        product: payload,
      };
    case PRODUCT_PASSIVE:
      return {
        ...state,
        product: payload,
      };
    case GET_LIST_BY_STRING:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_BRAND:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_PRİCE_SINKING_LIST:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_PRİCE_GROWING_LIST:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT_LIST2:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_CATEGORY_LIST:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_COLOR_LIST:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_NUMBER_LIST:
      return {
        ...state,
        products: payload,
      };
    case PRODUCT_SIZE_LIST:
      return {
        ...state,
        products: payload,
      };
      case PRODUCT_PRICE1:
        return{
          ...state,
          products:payload
        }
        case PRODUCT_PRICE2:
          return{
            ...state,
            products:payload
          }
          case PRODUCT_PRICE3:
            return{
              ...state,
              products:payload
            }
            case PRODUCT_PRICE4:
              return{
                ...state,
                products:payload
              }
    default:
      return {
        ...state,
      };
  }
}
