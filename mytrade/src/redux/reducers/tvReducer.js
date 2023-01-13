import { tv, tvs } from "../initials/tvItems";
import {
  ADD_TV,
  DELETE_TV,
  GET_TV_LIST,
  GET_TV_ONE,
  UPDATE_TV,
} from "../actions/tvActions";
const initialVales = {
  tv,
  tvs,
};
export default function TvReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_TV_LIST:
      return {
        ...state,
        tvs: payload,
      };

    case GET_TV_ONE:
      return {
        ...state,
        tv: payload,
      };
    case UPDATE_TV:
      return {
        ...state,
        tvs: [
          ...state.tvs.filter(
            (resp) => resp.ProductDetailTvId !== payload.ProductDetailTvId
          ),
          payload,
        ],
      };
    case DELETE_TV:
      return {
        ...state,
        tvs: [state.tvs.filter((x) => x.ProductDetailTvId !== payload)],
      };
    case ADD_TV:
      return {
        ...state,
        tvs: [...state.tvs, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
