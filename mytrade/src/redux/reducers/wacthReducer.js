import { wacth, wacths } from "../initials/wacthItems";
import {
  ADD_WATCH,
  DELETE_WATCH,
  GET_WATCH_LIST,
  GET_WATCH_ONE,
  UPDATE_WATCH,
} from "../actions/wacthActions";
const initialVales = {
  wacth,
  wacths,
};
export default function WacthReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_WATCH_LIST:
      return {
        ...state,
        wacths: payload,
      };

    case GET_WATCH_ONE:
      return {
        ...state,
        wacth: payload,
      };
    case UPDATE_WATCH:
      return {
        ...state,
        wacths: [
          ...state.wacths.filter(
            (resp) => resp.ProductDetailWatchId !== payload.ProductDetailWatchId
          ),
          payload,
        ],
      };
    case DELETE_WATCH:
      return {
        ...state,
        wacths: [
          state.wacths.filter((x) => x.ProductDetailWatchId !== payload),
        ],
      };
    case ADD_WATCH:
      return {
        ...state,
        wacths: [...state.wacths, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
