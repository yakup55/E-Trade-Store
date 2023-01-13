import { color, colors } from "../initials/colorItems";
import {
  ADD_COLOR,
  DELETE_COLOR,
  GET_COLOR_LIST,
  GET_ONE_COLOR,
  UPDATE_COLOR,
} from "../actions/colorActions";
const initials = {
  color,
  colors,
};
export default function colorReducer(state = initials, { type, payload }) {
  switch (type) {
    case GET_COLOR_LIST:
      return {
        ...state,
        colors: payload,
      };
    case GET_ONE_COLOR:
      return {
        ...state,
        color: payload,
      };
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, payload],
      };
    case DELETE_COLOR:
      return {
        ...state,
        colors: state.colors.filter((x) => x.colorId !== payload),
      };
    case UPDATE_COLOR:
      return {
        colors: [
          ...state.colors.filter((x) => x.colorId !== payload.colorId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
