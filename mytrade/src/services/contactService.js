import axios from "axios";

class ContactService {
  constructor() {
    this.baseUrl=`${process.env.REACT_APP_BASEURL}/contacts`
  }
  async getOneContact(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then(resp => resp.data);
  }
  async getContactList() {
    return await axios.get(this.baseUrl).then(resp => resp.data);
  }
  async addContact(contact) {
    return await axios.post(this.baseUrl,contact).then(resp => resp.data);
  }
  async deleteContact(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then(resp => resp.data);
  }
  async updateContact(id, contact) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, contact).then(resp => resp.data);
  }
}
export default ContactService;
