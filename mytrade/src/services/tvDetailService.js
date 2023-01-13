import axios from "axios";

class TvDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/tvdetail`;
  }
  async getOneTvDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getTvDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getAddTvDetail(tv) {
    return await axios.post(this.baseUrl, tv).then((resp) => resp.data);
  }
  async deleteTvDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateTvDetail(id, tv) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, tv).then((resp) => resp);
  }
}
export default TvDetailService;
