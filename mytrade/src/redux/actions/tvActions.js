import TvDetailService from "../../services/tvDetailService";
export const GET_TV_LIST = "GET_TV_LIST";
export const UPDATE_TV = "UPDATE_TV";
export const ADD_TV = "ADD_TV";
export const GET_TV_ONE = "GET_TV_ONE";
export const DELETE_TV = "DELETE_TV";

const tvService = new TvDetailService();

export function getTvList() {
  return function (dispacth) {
    tvService
      .getTvDetailList()
      .then((resp) => dispacth({ type: GET_TV_LIST, payload: resp }));
  };
}
export function getOneTv(id) {
  return function (dispacth) {
    tvService
      .getOneTvDetail(id)
      .then((resp) => dispacth({ type: GET_TV_ONE, payload: resp }));
  };
}
export function updateTv(id, tv) {
  return function (dispacth) {
    tvService
      .updateTvDetail(id, tv)
      .then((resp) => dispacth({ type: UPDATE_TV, payload: resp }));
  };
}
export function deleteTv(id) {
  return function (dispacth) {
    tvService
      .deleteTvDetail(id)
      .then((resp) => dispacth({ type: DELETE_TV, payload: id }));
  };
}
export function addTv(tv) {
  return function (dispacth) {
    tvService.getAddTvDetail(tv)
      .then((resp) => dispacth({ type: ADD_TV, payload: resp }));
  };
}
