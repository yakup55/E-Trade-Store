import SizeService from "../../services/sizeService";
export const GET_SIZE_LIST = "GET_SIZE_LIST";
export const GET_ONE_SIZE = "GET_ONE_SIZE";
export const ADD_SIZE = "ADD_SIZE";
export const DELETE_SIZE = "DELETE_SIZE";
export const UPDATE_SIZE = "UPDATE_SIZE";

const sizeService = new SizeService();

export function getsizeList() {
  return function (dispacth) {
    sizeService
      .getSizeList()
      .then((resp) => dispacth({ type: GET_SIZE_LIST, payload: resp }));
  };
}
export function getOneSize(id) {
  return function (dispacth) {
    sizeService
      .getOneSize(id)
      .then((resp) => dispacth({ type: GET_ONE_SIZE, payload: resp }));
  };
}
export function addSize(size) {
  return function (dispacth) {
    sizeService
      .addSize(size)
      .then((resp) => dispacth({ type: ADD_SIZE, payload: resp }));
  };
}
export function deleteSize(id) {
  return function (dispacth) {
    sizeService
      .deleteSize(id)
      .then((resp) => dispacth({ type: DELETE_SIZE, payload: id }));
  };
}
export function updateSize(id, size) {
  return function (dispacth) {
    sizeService
      .updateSize(id, size)
      .then((resp) => dispacth({ type: UPDATE_SIZE, payload: resp }));
  };
}
