import axios from "axios";

class NumberService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/numbers`;
  }
  async getNumberList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getOneNumber(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addNumber(number) {
    return await axios.post(this.baseUrl, number).then((resp) => resp.data);
  }
  async deleteNumber(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.id);
  }
  async updateNumber(id, number) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, number).then((resp) => resp.resp);
  }
}
export default NumberService;
