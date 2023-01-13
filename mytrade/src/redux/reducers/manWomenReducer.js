import { manwomen, manwomens } from "../initials/manWomenItems";
import {
  ADD_MAN_WOMEN,
  DELETE_MAN_WOMEN,
  GET_MAN_WOMEN_CONE,
  GET_MAN_WOMEN_LIST,
  UPDATE_MAN_WOMEN,
} from "../actions/manWomenActions";
const initialVales = {
  manwomen,
 manwomens,
};
export default function ManWomenReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_MAN_WOMEN_LIST:
      return {
        ...state,
        manwomens: payload,
      };

    case GET_MAN_WOMEN_CONE:
      return {
        ...state,
        manwomen: payload,
      };
    case UPDATE_MAN_WOMEN:
      return {
        ...state,
        manwomens: [
          ...state.manwomens.filter(
            (resp) =>
              resp.ProductDetailManWomenId !== payload.ProductDetailManWomenId
          ),
          payload,
        ],
      };
    case DELETE_MAN_WOMEN:
      return {
        ...state,
        manwomens: [
          state.manwomens.filter((x) => x.ProductDetailManWomenId !== payload),
        ],
      };
    case ADD_MAN_WOMEN:
      return {
        ...state,
        manwomens: [...state.manwomens, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
