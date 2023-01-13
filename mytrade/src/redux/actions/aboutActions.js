import AboutService from "../../services/aboutService";

export const GET_ABOUTS_LIST = "GET_ABOUTS_LIST";
export const GET_ONE_ABOUTS = "GET_ONE_ABOUTS";
export const ADD_ABOUTS = "ADD_ABOUTS";
export const UPDATE_ABOUTS = "UPDATE_ABOUTS";
export const DELETE_ABOUTS = "DELETE_ABOUTS";
export const GET_LAST_ABOUTS = "GET_LAST_ABOUTS";

const aboutService = new AboutService();

export function addAbouts(about) {
  return function (dispacth) {
    aboutService
      .addAbouts(about)
      .then((resp) => dispacth({ type: ADD_ABOUTS, payload: resp }));
  };
}

export function deleteAbouts(id) {
  return function (dispacth) {
    aboutService
      .deleteAbouts(id)
      .then((resp) => dispacth({ type: DELETE_ABOUTS, payload: id }));
  };
}
export function updateAbouts(id, about) {
  return function (dispacth) {
    aboutService
      .updateAbouts(id, about)
      .then((resp) => dispacth({ type: UPDATE_ABOUTS, payload: resp }));
  };
}
export function getAboutsList() {
  return function (dispacth) {
    aboutService
      .getAboutsList()
      .then((resp) => dispacth({ type: GET_ABOUTS_LIST, payload: resp }));
  };
}
export function getLastAbouts() {
  return function (dispacth) {
    aboutService
      .getLastAbouts()
      .then((resp) => dispacth({ type: GET_LAST_ABOUTS, payload: resp }));
  };
}
export function getOneAbout(id){
  return function(dispacth){
    aboutService.getOneAbouts(id).then((resp)=>dispacth({type:GET_ONE_ABOUTS,payload:resp}))
  }
}