import ProductService from "../../services/productService";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const GET_ADD_PRODUCT = "GET_ADD_PRODUCT";
export const GET_UPDATE_PRODUCT = "GET_UPDATE_PRODUCT";
export const GET_DELETE_PRODUCT = "GET_DELETE_PRODUCT";
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_ONE_PRODUCT_WITH_DETAILS = "GET_ONE_PRODUCT_WITH_DETAILS";
export const GET_LAST_PRODUCT = "GET_LAST_PRODUCT";
export const PRODUCT_CATEGORY = "PRODUCT_CATEGORY";
export const POPULAR_PRODUCT = "POPULAR_PRODUCT";
export const PRODUCT_ACTIVE = "PRODUCT_ACTIVE";
export const PRODUCT_PASSIVE = "PRODUCT_PASSIVE";
export const GET_LIST_BY_STRING = "GET_LIST_BY_STRING";
export const PRODUCT_BRAND = "PRODUCT_BRAND";
export const PRODUCT_PRİCE_SINKING_LIST = "PRODUCT_PRİCE_SINKING_LIST";
export const PRODUCT_PRİCE_GROWING_LIST = "PRODUCT_PRİCE_GROWING_LIST";
export const GET_PRODUCT_LIST2 = "GET_PRODUCT_LIST2";
export const PRODUCT_CATEGORY_LIST = "PRODUCT_CATEGORY_LIST";
export const PRODUCT_COLOR_LIST = "PRODUCT_COLOR_LIST";
export const PRODUCT_NUMBER_LIST = "PRODUCT_NUMBER_LIST";
export const PRODUCT_SIZE_LIST = "PRODUCT_SIZE_LIST";
export const PRODUCT_PRICE1 = "PRODUCT_PRICE1";
export const PRODUCT_PRICE2 = "PRODUCT_PRICE2";
export const PRODUCT_PRICE3 = "PRODUCT_PRICE3";
export const PRODUCT_PRICE4 = "PRODUCT_PRICE4";

const productService = new ProductService();

export function getOneProduct(id) {
  return function (dispacth) {
    productService
      .getOneProduct(id)
      .then((resp) => dispacth({ type: GET_ONE_PRODUCT, payload: resp }));
  };
}
export function getAddProduct(product) {
  return function (dispacth) {
    productService
      .getAddProduct(product)
      .then((resp) => dispacth({ type: GET_ADD_PRODUCT, payload: resp }));
  };
}
export function getProductList() {
  return function (dispacth) {
    productService
      .getProductList()
      .then((resp) => dispacth({ type: GET_PRODUCT_LIST, payload: resp }));
  };
}
export function getUpdateProduct(id, product) {
  return function (dispacth) {
    productService
      .getUpdateProduct(id, product)
      .then((resp) => dispacth({ type: GET_UPDATE_PRODUCT, payload: resp }));
  };
}
export function getDeleteProduct(id) {
  return function (dispacth) {
    productService
      .getDeleteProduct(id)
      .then((resp) => dispacth({ type: GET_DELETE_PRODUCT, payload: id }));
  };
}
export function getOneProductWithDetail(id) {
  return function (dispacth) {
    productService
      .getOneProductWithDetail(id)
      .then((resp) =>
        dispacth({ type: GET_ONE_PRODUCT_WITH_DETAILS, payload: resp })
      );
  };
}
export function getLastProduct() {
  return function (dispacth) {
    productService
      .getLastProduct()
      .then((resp) => dispacth({ type: GET_LAST_PRODUCT, payload: resp }));
  };
}
export function productCategory(id) {
  return function (dispacth) {
    productService
      .productCategory(id)
      .then((resp) => dispacth({ type: PRODUCT_CATEGORY, payload: resp }));
  };
}
export function popularProduct() {
  return function (dispacth) {
    productService
      .popularProduct()
      .then((resp) => dispacth({ type: POPULAR_PRODUCT, payload: resp }));
  };
}
export function productActive(id) {
  return function (dispacth) {
    productService
      .productActive(id)
      .then((resp) => dispacth({ type: PRODUCT_ACTIVE, payload: resp }));
  };
}
export function productPassive(id) {
  return function (dispacth) {
    productService
      .productPassive(id)
      .then((resp) => dispacth({ type: PRODUCT_PASSIVE, payload: resp }));
  };
}
export function getListByString(name) {
  return function (dispacth) {
    productService
      .getListByString(name)
      .then((resp) => dispacth({ type: GET_LIST_BY_STRING, payload: resp }));
  };
}
export function productBrand(id) {
  return function (dispacth) {
    productService
      .productBrand(id)
      .then((resp) => dispacth({ type: PRODUCT_BRAND, payload: resp }));
  };
}
export function priceSinkingList() {
  return function (dispacth) {
    productService
      .ProductPriceSinkingList()
      .then((resp) =>
        dispacth({ type: PRODUCT_PRİCE_SINKING_LIST, payload: resp })
      );
  };
}
export function priceGrowingList() {
  return function (dispacth) {
    productService
      .ProductPriceGrowingList()
      .then((resp) =>
        dispacth({ type: PRODUCT_PRİCE_GROWING_LIST, payload: resp })
      );
  };
}
export function getProductList2(id) {
  return function (dispacth) {
    productService
      .getProductList2(id)
      .then((resp) => dispacth({ type: GET_PRODUCT_LIST2, payload: resp }));
  };
}
export function productCategoryList(id) {
  return function (dispacth) {
    productService
      .productCategoryList(id)
      .then((resp) => dispacth({ type: PRODUCT_CATEGORY_LIST, payload: resp }));
  };
}
export function productColorList(id) {
  return function (dispacth) {
    productService
      .productColorList(id)
      .then((resp) => dispacth({ type: PRODUCT_COLOR_LIST, payload: resp }));
  };
}
export function productNumberList(id) {
  return function (dispacth) {
    productService
      .productNumberList(id)
      .then((resp) => dispacth({ type: PRODUCT_SIZE_LIST, payload: resp }));
  };
}
export function productSizeList(id) {
  return function (dispacth) {
    productService
      .productSizeList(id)
      .then((resp) => dispacth({ type: PRODUCT_SIZE_LIST, payload: resp }));
  };
}
export function productPrice1() {
  return function (dispacth) {
    productService
      .productPrice1()
      .then((resp) => dispacth({ type: PRODUCT_PRICE1, payload: resp }));
  };
}

export function productPrice2() {
  return function (dispacth) {
    productService
      .productPrice2()
      .then((resp) => dispacth({ type: PRODUCT_PRICE2, payload: resp }));
  };
}
export function productPrice3() {
  return function (dispacth) {
    productService
      .productPrice3()
      .then((resp) => dispacth({ type: PRODUCT_PRICE3, payload: resp }));
  };
}
export function productPrice4() {
  return function (dispacth) {
    productService
      .productPrice4()
      .then((resp) => dispacth({ type: PRODUCT_PRICE4, payload: resp }));
  };
}
