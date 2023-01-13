import axios from "axios";

class PhoneDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/phonedetail`;
  }
  async getOnePhoneDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getPhoneDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getAddPhoneDetail(phone) {
    return await axios.post(this.baseUrl, phone).then((resp) => resp.data);
  }
  async deletePhoneDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updatePhoneDetail(id, phone) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, phone).then((resp) => resp);
  }
}
export default PhoneDetailService;
