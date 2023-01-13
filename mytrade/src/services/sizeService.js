import axios from "axios";

class SizeService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/sizes`;
  }
  async getSizeList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getOneSize(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addSize(size) {
    return await axios.post(this.baseUrl, size).then((resp) => resp.data);
  }
  async deleteSize(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.id);
  }
  async updateSize(id, size) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url,size).then((resp) => resp.resp);
  }
}
export default SizeService;
