import {
  CATEGORY_ACTIVE,
  CATEGORY_PASSIVE,
  GET_ADD_CATEGORY,
  GET_CATEGORY_LIST,
  GET_DELETE_CATEGORY,
  GET_LAST_CATEGORY,
  GET_ONE_CATEGORY,
  GET_UPDATE_CATEGORY,
  POPULAR_CATEGORY,
} from "../actions/categroyActions";
import { category, categories } from "../initials/categoryItems";

const initialVales = {
  categories,
  category,
};

export default function categoryReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
      };
    case GET_ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case GET_DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((x) => x.categoryId !== payload),
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case GET_UPDATE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (x) => x.categoryId !== payload.categoryId
          ),
          payload,
        ],
      };
    case GET_LAST_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
    case POPULAR_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORY_ACTIVE:
      return {
        ...state,
        category: payload,
      };
    case CATEGORY_PASSIVE:
      return {
        ...state,
        category: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
