import HeadPhonetailService from "../../services/HeadPhoneDetailService";
export const GET_HEAD_PHONE_LIST = "GET_HEAD_PHONE_LIST";
export const UPDATE_HEAD_PHONE = "UPDATE_HEAD_PHONE";
export const ADD_HEAD_PHONE = "ADD_HEAD_PHONE";
export const GET_HEAD_PHONE_ONE = "GET_HEAD_PHONE_ONE";
export const DELETE_HEAD_PHONE = "DELETE_HEAD_PHONE";

const headphoneService = new HeadPhonetailService();

export function getHeadPhoneList() {
  return function (dispacth) {
    headphoneService
      .getHeadPhoneDetailList()
      .then((resp) => dispacth({ type: GET_HEAD_PHONE_LIST, payload: resp }));
  };
}
export function getOneHeadPhone(id) {
  return function (dispacth) {
    headphoneService
      .getOneHeadPhoneDetail(id)
      .then((resp) => dispacth({ type: GET_HEAD_PHONE_ONE, payload: resp }));
  };
}
export function updateHeadPhone(id, phone) {
  return function (dispacth) {
    headphoneService
      .updateHeadPhoneDetail(id, phone)
      .then((resp) => dispacth({ type: UPDATE_HEAD_PHONE, payload: resp }));
  };
}
export function deleteHeadPhone(id) {
  return function (dispacth) {
    headphoneService
      .deleteHeadPhoneDetail(id)
      .then((resp) => dispacth({ type: DELETE_HEAD_PHONE, payload: id }));
  };
}
export function addHeadPhone(phone) {
  return function (dispacth) {
    headphoneService
      .getAddHeadPhoneDetail(phone)
      .then((resp) => dispacth({ type: ADD_HEAD_PHONE, payload: resp }));
  };
}
