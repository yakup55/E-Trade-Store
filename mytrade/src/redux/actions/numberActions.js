import NumberService from "../../services/numberService";
export const GET_NUMBER_LIST = "GET_NUMBER_LIST";
export const GET_ONE_NUMBER = "GET_ONE_NUMBER";
export const ADD_NUMBER = "ADD_NUMBER";
export const DELETE_NUMBER = "DELETE_NUMBER";
export const UPDATE_NUMBER = "UPDATE_NUMBER";

const numberService = new NumberService();

export function getNumberList() {
  return function (dispacth) {
    numberService
      .getNumberList()
      .then((resp) => dispacth({ type: GET_NUMBER_LIST, payload: resp }));
  };
}
export function getOneNumber(id) {
  return function (dispacth) {
    numberService
      .getOneNumber(id)
      .then((resp) => dispacth({ type: GET_ONE_NUMBER, payload: resp }));
  };
}
export function addNumber(number) {
  return function (dispacth) {
    numberService
      .addNumber(number)
      .then((resp) => dispacth({ type: ADD_NUMBER, payload: resp }));
  };
}
export function deleteNumber(id) {
  return function (dispacth) {
    numberService
      .deleteNumber(id)
      .then((resp) => dispacth({ type: DELETE_NUMBER, payload: id }));
  };
}
export function updateNumber(id, number) {
  return function (dispacth) {
    numberService
      .updateNumber(id, number)
      .then((resp) => dispacth({ type: UPDATE_NUMBER, payload: resp }));
  };
}
