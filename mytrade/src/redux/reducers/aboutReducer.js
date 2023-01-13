import {
  ADD_ABOUTS,
  DELETE_ABOUTS,
  GET_ABOUTS_LIST,
  GET_LAST_ABOUTS,
  GET_ONE_ABOUTS,
  UPDATE_ABOUTS,
} from "../actions/aboutActions";
import { about, abouts } from "../initials/aboutItems";
const initialVales = {
  about,
  abouts,
};

export default function aboutReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case ADD_ABOUTS:
      return {
        ...state,
        abouts: [...state.abouts, payload],
      };
    case DELETE_ABOUTS:
      return {
        ...state,
        abouts: state.abouts.filter((x) => x.aboutId !== payload),
      };
    case UPDATE_ABOUTS:
      return {
        ...state,
        abouts: [
          ...state.abouts.filter((x) => x.aboutId !== payload.aboutId),
          payload,
        ],
      };
    case GET_ABOUTS_LIST:
      return {
        ...state,
        abouts: payload,
      };
    case GET_LAST_ABOUTS:
      return {
        ...state,
        abouts: payload,
      };
      case GET_ONE_ABOUTS:
        return{
          ...state,
          about:payload
        }
    default:
      return {
        ...state,
      };
  }
}
