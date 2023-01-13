import BrandService from "../../services/brandService";
export const GET_BRAND_LIST = "GET_BRAND_LIST";
export const GET_ONE_BRAND = "GET_ONE_BRAND";
export const ADD_BRAND = "ADD_BRAND";
export const UPDATE_BRAND = "UPDATE_BRAND";
export const DELETE_BRAND = "DELETE_BRAND";

const brandService = new BrandService();

export function getBrandList() {
  return function (dispacth) {
    brandService
      .getBrandList()
      .then((resp) => dispacth({ type: GET_BRAND_LIST, payload: resp }));
  };
}

export function getOneBrand(id) {
  return function (dispacth) {
    brandService
      .getOneBrand(id)
      .then((resp) => dispacth({ type: GET_ONE_BRAND, payload: resp }));
  };
}
export function deleteBrand(id) {
  return function (dispacth) {
    brandService
      .deleteBrand(id)
      .then((resp) => dispacth({ type: DELETE_BRAND, payload: id }));
  };
}
export function updateBrand(id, brand) {
  return function (dispacth) {
    brandService
      .updateBrand(id, brand)
      .then((resp) => dispacth({ type: UPDATE_BRAND, payload: resp }));
  };
}
export function addBrand(brand) {
  return function (dispacth) {
    brandService
      .addBrand(brand)
      .then((resp) => dispacth({ type: ADD_BRAND, payload: resp }));
  };
}
