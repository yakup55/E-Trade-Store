import PcDetailService from "../../services/pcDetailService";
export const GET_PC_LIST = "GET_PC_LIST";
export const UPDATE_PC = "UPDATE_PC";
export const ADD_PC = "ADD_PC";
export const GET_PC_ONE = "GET_PC_ONE";
export const DELETE_PC = "DELETE_PC";

const pcService = new PcDetailService();

export function getPcList() {
  return function (dispacth) {
    pcService
      .getPcDetailList()
      .then((resp) => dispacth({ type: GET_PC_LIST, payload: resp }));
  };
}
export function getOnePc(id) {
  return function (dispacth) {
    pcService
      .getOnePcDetail(id)
      .then((resp) => dispacth({ type: GET_PC_ONE, payload: resp }));
  };
}
export function updatePc(id, pc) {
  return function (dispacth) {
    pcService
      .updatePcDetail(id, pc)
      .then((resp) => dispacth({ type: UPDATE_PC, payload: resp }));
  };
}
export function deletePc(id) {
  return function (dispacth) {
    pcService
      .deletePcDetail(id)
      .then((resp) => dispacth({ type: DELETE_PC, payload: id }));
  };
}
export function addPc(pc) {
  return function (dispacth) {
    pcService
      .pcAddDetail(pc)
      .then((resp) => dispacth({ type: ADD_PC, payload: resp }));
  };
}
