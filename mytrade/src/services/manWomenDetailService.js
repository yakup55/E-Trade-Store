import axios from "axios";

class ManWomenDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/manwomendetail`;
  }
  async getOneManWomenDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getManWomenDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getAddManWomenDetail(manwomen) {
    return await axios.post(this.baseUrl, manwomen).then((resp) => resp.data);
  }
  async deleteManWomenDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateManWomenDetail(id, manwomen) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url,manwomen).then((resp) => resp);
  }
}
export default ManWomenDetailService;
