import ManWomenDetailService from "../../services/manWomenDetailService";
export const GET_MAN_WOMEN_LIST = "GET_MAN_WOMEN_LIST";
export const UPDATE_MAN_WOMEN = "UPDATE_MAN_WOMEN";
export const ADD_MAN_WOMEN = "ADD_MAN_WOMEN";
export const GET_MAN_WOMEN_CONE = "GET_MAN_WOMEN_CONE";
export const DELETE_MAN_WOMEN = "DELETE_MAN_WOMEN";

const manwomenService = new ManWomenDetailService();

export function getManWomenList() {
  return function (dispacth) {
    manwomenService
      .getManWomenDetailList()
      .then((resp) => dispacth({ type: GET_MAN_WOMEN_LIST, payload: resp }));
  };
}
export function getOneManWomen(id) {
  return function (dispacth) {
    manwomenService
      .getOneManWomenDetail(id)
      .then((resp) => dispacth({ type: GET_MAN_WOMEN_CONE, payload: resp }));
  };
}
export function updateManWomen(id, manwomen) {
  return function (dispacth) {
    manwomenService
      .updateManWomenDetail(id, manwomen)
      .then((resp) => dispacth({ type: UPDATE_MAN_WOMEN, payload: resp }));
  };
}
export function deleteManWomen(id) {
  return function (dispacth) {
    manwomenService
      .deleteManWomenDetail(id)
      .then((resp) => dispacth({ type: DELETE_MAN_WOMEN, payload: id }));
  };
}
export function addManWomen(manwomen) {
  return function (dispacth) {
    manwomenService
      .getAddManWomenDetail(manwomen)
      .then((resp) => dispacth({ type: ADD_MAN_WOMEN, payload: resp }));
  };
}
