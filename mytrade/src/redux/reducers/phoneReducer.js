import { phone, phones } from "../initials/phoneItems";
import {
  ADD_PHONE,
  DELETE_PHONE,
  GET_PHONE_LIST,
  GET_PHONE_ONE,
  UPDATE_PHONE,
} from "../actions/phoneActions";
const initialVales = {
  phone,
  phones,
};
export default function PhoneReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_PHONE_LIST:
      return {
        ...state,
        phones: payload,
      };

    case GET_PHONE_ONE:
      return {
        ...state,
        phone: payload,
      };
    case UPDATE_PHONE:
      return {
        ...state,
        phones: [
          ...state.phones.filter(
            (resp) => resp.ProductDetailPhoneId !== payload.ProductDetailPhoneId
          ),
          payload,
        ],
      };
    case DELETE_PHONE:
      return {
        ...state,
        phones: [
          state.phones.filter((x) => x.ProductDetailPhoneId !== payload),
        ],
      };
    case ADD_PHONE:
      return {
        ...state,
        phones: [...state.phones, payload],
      };
    default:
      return {
        ...state,
      };
  }
}
