import CategoryService from "../../services/categoryService";

export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_ADD_CATEGORY = "GET_ADD_CATEGORY";
export const GET_UPDATE_CATEGORY = "GET_UPDATE_CATEGORY";
export const GET_ONE_CATEGORY = "GET_ONE_CATEGORY";
export const GET_DELETE_CATEGORY = "GET_DELETE_CATEGORY";
export const GET_LAST_CATEGORY = "GET_LAST_CATEGORY";
export const POPULAR_CATEGORY = "POPULAR_CATEGORY";
export const CATEGORY_ACTIVE = "CATEGORY_ACTIVE";
export const CATEGORY_PASSIVE = "CATEGORY_PASSIVE";

const categoryService = new CategoryService();

export function addCategory(category) {
  return function (dispacth) {
    categoryService
      .getAddCategory(category)
      .then((resp) => dispacth({ type: GET_ADD_CATEGORY, payload: resp }));
  };
}
export function updateCategory(id, category) {
  return function (dispacth) {
    categoryService
      .getUpdateCategory(id, category)
      .then((resp) => dispacth({ type: GET_UPDATE_CATEGORY, payload: resp }));
  };
}
export function getCategoryList() {
  return function (dispacth) {
    categoryService
      .getCategoryList()
      .then((resp) => dispacth({ type: GET_CATEGORY_LIST, payload: resp }));
  };
}
export function getOneCategory(id) {
  return function (dispacth) {
    categoryService
      .getOneCategory(id)
      .then((resp) => dispacth({ type: GET_ONE_CATEGORY, payload: resp }));
  };
}
export function getDeleteCategory(id) {
  return function (dispacth) {
    categoryService
      .getDeleteCategory(id)
      .then((resp) => dispacth({ type: GET_DELETE_CATEGORY, payload: id }));
  };
}
export function getLastCategory() {
  return function (dispacth) {
    categoryService
      .getLastCategory()
      .then((resp) => dispacth({ type: GET_LAST_CATEGORY, payload: resp }));
  };
}
export function popularCategory() {
  return function (dispacth) {
    categoryService
      .popularCategory()
      .then((resp) => dispacth({ type: POPULAR_CATEGORY, payload: resp }));
  };
}
export function categoryActive(id) {
  return function (dispacth) {
    categoryService
      .categoryActive(id)
      .then((resp) => dispacth({ type: CATEGORY_ACTIVE, payload: resp }));
  };
}
export function categoryPassive(id) {
  return function (dispacth) {
    categoryService
      .categoryPassive(id)
      .then((resp) => dispacth({ type: CATEGORY_PASSIVE, payload: resp }));
  };
}
