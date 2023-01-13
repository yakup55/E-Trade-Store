import axios from "axios";

class CommentService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/comments`;
  }
  async getOneComment(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then(resp => resp.data);
  }
  async getCommentsList() {
    return await axios.get(this.baseUrl).then(resp => resp.data);
  }
  async getAddComment(comment) {
    return await axios.post( this.baseUrl,comment).then(resp => resp.data);
  }
  async getUpdateComment(id, comment) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, comment).then(resp => resp.data);
  }
  async getDeleteComment(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then(resp => resp.data);
  }
  async oneCommentProduct(id) {
    const url = `${this.baseUrl}/oneCommentProduct/${id}`;
    return await axios.get(url).then(resp => resp.data);
  }
  async commentActive(id){
    const url=`${this.baseUrl}/commetactive/${id}`
    return await axios.get(url).then(resp=>resp.data)
  }
  async commentPassive(id){
    const url=`${this.baseUrl}/commentpassive/${id}`
    return await axios.get(url).then(resp=>resp.data)
  }
}
export default CommentService;
