import axios from "axios";
class PcDetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/pcdetail`;
  }
  async getPcDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async deletePcDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updatePcDetail(id, pc) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, pc).then((resp) => resp.data);
  }
  async pcAddDetail(pc) {
    return await axios.post(this.baseUrl,pc).then((resp) => resp.data);
  }

  async getOnePcDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}

export default PcDetailService;
