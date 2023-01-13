import WacthDetailService from "../../services/WacthDetailService";
export const GET_WATCH_LIST = "GET_WATCH_LIST";
export const UPDATE_WATCH = "UPDATE_WATCH";
export const ADD_WATCH = "ADD_WATCH";
export const GET_WATCH_ONE = "GET_WATCH_ONE";
export const DELETE_WATCH = "DELETE_WATCH";

const wacthService = new WacthDetailService();

export function getdWactchList() {
  return function (dispacth) {
    wacthService
      .getWacthDetailList()
      .then((resp) => dispacth({ type: GET_WATCH_LIST, payload: resp }));
  };
}
export function getOnedWactch(id) {
  return function (dispacth) {
    wacthService
      .getOneWactDetail(id)
      .then((resp) => dispacth({ type: GET_WATCH_ONE, payload: resp }));
  };
}
export function updatedWactch(id, wacth) {
  return function (dispacth) {
    wacthService
      .updateWacthDetail(id, wacth)
      .then((resp) => dispacth({ type: UPDATE_WATCH, payload: resp }));
  };
}
export function deleteWactch(id) {
  return function (dispacth) {
    wacthService
      .deleteWatcthDetail(id)
      .then((resp) => dispacth({ type: DELETE_WATCH, payload: id }));
  };
}
export function addWactch(wacth) {
  return function (dispacth) {
    wacthService
      .getAddWacthDetail(wacth)
      .then((resp) => dispacth({ type: ADD_WATCH, payload: resp }));
  };
}
