import {
  ADD_SIZE,
  DELETE_SIZE,
  GET_ONE_SIZE,
  GET_SIZE_LIST,
  UPDATE_SIZE,
} from "../actions/sizeActions";
import { size, sizes } from "../initials/sizeItems";
const initilvales = {
  size,
  sizes,
};
export default function sizeReducer(state = initilvales, { type, payload }) {
  switch (type) {
    case GET_SIZE_LIST:
      return {
        ...state,
        sizes: payload,
      };
    case GET_ONE_SIZE:
      return {
        ...state,
        size: payload,
      };
    case ADD_SIZE:
      return {
        ...state,
        sizes: [...state.sizes, payload],
      };
    case DELETE_SIZE:
      return {
        ...state,
        sizes: state.sizes.filter((x) => x.sizeId !== payload),
      };
    case UPDATE_SIZE:
      return {
        ...state,
        sizes: [
          ...state.sizes.filter((x) => x.sizeId !== payload.sizeId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
