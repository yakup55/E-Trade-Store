import { comment, comments } from "../initials/commentItems";
import {
  COMMENT_ACTIVE,
  COMMENT_PASSIVE,
  GET_ADD_COMMENT,
  GET_COMMENT_LIST,
  GET_DELETE_COMMENT,
  GET_ONE_COMMENT,
  GET_UPDATE_COMMENT,
  ONE_COMMENT_PRODUCT,
} from "../actions/commentActions";
const initialVales = {
  comment,
  comments,
};
export default function commentReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_ONE_COMMENT:
      return {
        ...state,
        comment: payload,
      };
    case GET_ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case GET_DELETE_COMMENT:
      return {
        ...state,
        comments: [...state.comments.filter((x) => x.commentId !== payload)],
      };
    case GET_UPDATE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter((x) => x.commentId !== payload.commentId),
          payload,
        ],
      };
    case GET_COMMENT_LIST:
      return {
        ...state,
        comments: payload,
      };
    case ONE_COMMENT_PRODUCT:
      return {
        ...state,
        comments: payload,
      };
    case COMMENT_ACTIVE:
      return {
        ...state,
        comment: payload,
      };
    case COMMENT_PASSIVE:
      return {
        ...state,
        comment: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
