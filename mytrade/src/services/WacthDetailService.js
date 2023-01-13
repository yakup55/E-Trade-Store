import axios from "axios";

class WacthDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/wactdetail`;
  }
  async getOneWactDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getWacthDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getAddWacthDetail(wacth) {
    return await axios.post(this.baseUrl, wacth).then((resp) => resp.data);
  }
  async deleteWatcthDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateWacthDetail(id, wacth) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, wacth).then((resp) => resp);
  }
}
export default WacthDetailService;
