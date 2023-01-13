import axios from "axios";

class HeadPhoneDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/headphonedetail`;
  }
  async getOneHeadPhoneDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getHeadPhoneDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getAddHeadPhoneDetail(phone) {
    return await axios.post(this.baseUrl, phone).then((resp) => resp.data);
  }
  async deleteHeadPhoneDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateHeadPhoneDetail(id, phone) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, phone).then((resp) => resp);
  }
}
export default HeadPhoneDetailService;
