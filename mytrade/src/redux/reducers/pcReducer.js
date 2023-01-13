import { pc, pcs } from "../initials/pcItems";
import { ADD_PC, DELETE_PC, GET_PC_LIST, GET_PC_ONE, UPDATE_PC } from "../actions/pcActions";
const initialVales = {
  pc,
  pcs,
};
export default function pcReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_PC_LIST:
      return {
        ...state,
        pcs: payload,
      };

    case GET_PC_ONE:
      return {
        ...state,
        pc: payload,
      };
    case UPDATE_PC:
      return {
        ...state,
        pcs: [
          ...state.pcs.filter(
            (resp) => resp.productDetailPcId !== payload.productDetailPcId
          ),
          payload,
        ],
      };
      case DELETE_PC:
        return{
            ...state,
            pcs:[state.pcs.filter((x) => x.productDetailPcId !== payload)]
        }
        case ADD_PC:
            return{
                ...state,
                pcs:[...state.pcs,payload]
            }
    default:
      return {
        ...state,
      };
  }
}
