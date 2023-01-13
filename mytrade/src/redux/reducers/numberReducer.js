import { number, numbers } from "../initials/numberItems";
import {
  ADD_NUMBER,
  DELETE_NUMBER,
  GET_NUMBER_LIST,
  GET_ONE_NUMBER,
  UPDATE_NUMBER,
} from "../actions/numberActions";
const initilvales = {
  number,
  numbers,
};
export default function numberReducer(state = initilvales, { type, payload }) {
  switch (type) {
    case GET_NUMBER_LIST:
      return {
        ...state,
        numbers: payload,
      };
    case GET_ONE_NUMBER:
      return {
        ...state,
        number: payload,
      };
    case ADD_NUMBER:
      return {
        ...state,
        numbers: [...state.numbers, payload],
      };
    case DELETE_NUMBER:
      return {
        ...state,
        numbers: state.numbers.filter((x) => x.numberId !== payload),
      };
    case UPDATE_NUMBER:
      return {
        ...state,
        numbers: [
          ...state.numbers.filter((x) => x.numberId !== payload.numberId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
