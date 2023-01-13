import PhondetailService from "../../services/PhoneDetailService";
export const GET_PHONE_LIST = "GET_PHONE_LIST";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const ADD_PHONE = "ADD_PHONE";
export const GET_PHONE_ONE = "GET_PHONE_ONE";
export const DELETE_PHONE = "DELETE_PHONE";

const phoneService = new PhondetailService();

export function getPhoneList() {
  return function (dispacth) {
    phoneService
      .getPhoneDetailList()
      .then((resp) => dispacth({ type: GET_PHONE_LIST, payload: resp }));
  };
}
export function getOnePhone(id) {
  return function (dispacth) {
    phoneService
      .getOnePhoneDetail(id)
      .then((resp) => dispacth({ type: GET_PHONE_ONE, payload: resp }));
  };
}
export function updatePhone(id, phone) {
  return function (dispacth) {
    phoneService
      .updatePhoneDetail(id, phone)
      .then((resp) => dispacth({ type: UPDATE_PHONE, payload: resp }));
  };
}
export function deletePhone(id) {
  return function (dispacth) {
    phoneService
      .deletePhoneDetail(id)
      .then((resp) => dispacth({ type: DELETE_PHONE, payload: id }));
  };
}
export function addPhone(phone) {
  return function (dispacth) {
   phoneService.getAddPhoneDetail(phone).then((resp)=>dispacth({type:ADD_PHONE,payload:resp}))
  };
}
