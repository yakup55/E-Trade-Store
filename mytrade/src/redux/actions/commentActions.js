import { Exposure } from "@mui/icons-material";
import CommentService from "../../services/commentService";

export const GET_ONE_COMMENT = "GET_ONE_COMMENT";
export const GET_DELETE_COMMENT = "GET_DELETE_COMMENT";
export const GET_UPDATE_COMMENT = "GET_UPDATE_COMMENT";
export const GET_ADD_COMMENT = "GET_ADD_COMMENT";
export const GET_COMMENT_LIST = "GET_COMMENT_LIST";
export const ONE_COMMENT_PRODUCT = "ONE_COMMENT_PRODUCT";
export const COMMENT_ACTIVE = "COMMENT_ACTIVE";
export const COMMENT_PASSIVE = "COMMENT_PASSIVE";

const commentService = new CommentService();
export function getOneComment(id) {
  return function (dispacth) {
    commentService
      .getOneComment(id)
      .then((resp) => dispacth({ type: GET_ONE_COMMENT, payload: resp }));
  };
}
export function getAddComment(comment) {
  return function (dispacth) {
    commentService
      .getAddComment(comment)
      .then((resp) => dispacth({ type: GET_ADD_COMMENT, payload: resp }));
  };
}
export function getDeleteComment(id) {
  return function (dispacth) {
    commentService
      .getDeleteComment(id)
      .then((resp) => dispacth({ type: GET_DELETE_COMMENT, payload: id }));
  };
}
export function getUpdateComment(id, comment) {
  return function (dispacth) {
    commentService
      .getUpdateComment(id, comment)
      .then((resp) => dispacth({ type: GET_UPDATE_COMMENT, payload: resp }));
  };
}
export function getCommentList() {
  return function (dispacth) {
    commentService
      .getCommentsList()
      .then((resp) => dispacth({ type: GET_COMMENT_LIST, payload: resp }));
  };
}
export function oneCommentProduct(id) {
  return function (dispacth) {
    commentService
      .oneCommentProduct(id)
      .then((resp) => dispacth({ type: ONE_COMMENT_PRODUCT, payload: resp }));
  };
}
export function commentActive(id) {
  return function (dispacth) {
    commentService
      .commentActive(id)
      .then((resp) => dispacth({ type: COMMENT_ACTIVE, payload: resp }));
  };
}
export function commentPassive(id) {
  return function (dispacth) {
    commentService
      .commentPassive(id)
      .then((resp) => dispacth({ type: COMMENT_PASSIVE, payload: resp }));
  };
}
