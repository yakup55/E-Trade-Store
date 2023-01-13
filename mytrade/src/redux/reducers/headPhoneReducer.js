import { headphone, headphones } from "../initials/headPhoneItems";
import {
  ADD_HEAD_PHONE,
  DELETE_HEAD_PHONE,
  GET_HEAD_PHONE_LIST,
  GET_HEAD_PHONE_ONE,
  UPDATE_HEAD_PHONE,
} from "../actions/headPhoneActions";
const initialVales = {
  headphone,
  headphones,
};
export default function headPhoneReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_HEAD_PHONE_LIST:
      return {
        ...state,
        headphones: payload,
      };

    case GET_HEAD_PHONE_ONE:
      return {
        ...state,
        headphone: payload,
      };
    case UPDATE_HEAD_PHONE:
      return {
        ...state,
        headphones: [
          ...state.headphones.filter(
            (resp) => resp.HeadPhoneId !== payload.HeadPhoneId
          ),
          payload,
        ],
      };
    case DELETE_HEAD_PHONE:
      return {
        ...state,
        headphones: [state.headphones.filter((x) => x.HeadPhoneId !== payload)],
      };
    case ADD_HEAD_PHONE:
      return {
        ...state,
        headphones: [...state.headphones, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
