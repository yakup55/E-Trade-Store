import axios from "axios";

class ProductService {
  constructor() {     
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/products`;
  }
  async getOneProduct(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getUpdateProduct(id, product) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, product).then((resp) => resp.data);
  }
  async getDeleteProduct(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async getAddProduct(product) {
    return await axios.post(this.baseUrl, product).then((resp) => resp.data);
  }
  async getProductList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getProductWithDetail() {
    const url = `${this.baseUrl}/getallproductwithdetaillist`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getOneProductWithDetail(id) {
    const url = `${this.baseUrl}/getoneproductwithdetail/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getLastProduct() {
    const url = `${this.baseUrl}/getlastproduct`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productCategory(id) {
    const url = `${this.baseUrl}/productcategory/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async popularProduct() {
    const url = `${this.baseUrl}/popularproduct`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productActive(id) {
    const url = `${this.baseUrl}/productactive/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productPassive(id) {
    const url = `${this.baseUrl}/productpassive/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getListByString(name) {
    return await axios.get(name).then((resp) => resp.data);
  }
  async productBrand(id) {
    const url = `${this.baseUrl}/productbrand/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async ProductPriceSinkingList() {
    const url = `${this.baseUrl}/productpricesinking`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async ProductPriceGrowingList() {
    const url = `${this.baseUrl}/productpricegrowing`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getProductList2(id) {
    const url = `${this.baseUrl}/productlist2/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productCategoryList(id) {
    const url = `${this.baseUrl}/productcategorylist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productColorList(id) {
    const url = `${this.baseUrl}/productcolorlist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productNumberList(id) {
    const url = `${this.baseUrl}/productnumberlist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productSizeList(id) {
    const url = `${this.baseUrl}/productsizelist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async productPrice1(){
    const url= `${this.baseUrl}/productprice1`;
    return await axios.get(url).then((resp)=>resp.data)
  }
  async productPrice2(){
    const url= `${this.baseUrl}/productprice2`;
    return await axios.get(url).then((resp)=>resp.data)
  }
  async productPrice3(){
    const url= `${this.baseUrl}/productprice3`;
    return await axios.get(url).then((resp)=>resp.data)
  }
  async productPrice4(){
    const url= `${this.baseUrl}/productprice4`;
    return await axios.get(url).then((resp)=>resp.data)
  }
}
export default ProductService;
