import { brand, brands } from "../initials/brandItems";
import {
  ADD_BRAND,
  DELETE_BRAND,
  GET_BRAND_LIST,
  GET_ONE_BRAND,
  UPDATE_BRAND,
} from "../actions/brandActions";
const initialVales = {
  brand,
  brands,
};
export default function brandReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_BRAND_LIST:
      return {
        ...state,
        brands: payload,
      };
    case GET_ONE_BRAND:
      return {
        ...state,
        brand: payload,
      };
    case DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((x) => x.brandId !== payload),
      };
    case UPDATE_BRAND:
      return {
        ...state,
        brands: [
          ...state.brands.filter((x) => x.brandId !== payload.brandId),
          payload,
        ],
      };
    case ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
