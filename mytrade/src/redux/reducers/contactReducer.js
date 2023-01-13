import { contact, contacts } from "../initials/contactItems";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_LIST_CONTACT,
  GET_ONE_CONTACT,
  UPDATE_CONTACT,
} from "../actions/contactActions";
const initialVales = {
  contact,
  contacts,
};
export default function ContactReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case GET_LIST_CONTACT:
      return {
        ...state,
        contacts: payload,
      };
    case GET_ONE_CONTACT:
      return {
        ...state,
        contact: payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((x) => x.contactId !== payload),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((x) => x.contactId !== payload.contactId),
          payload,
        ],
      };

    default:
      return {
        ...state,
      };
  }
}
