import axios from "axios";
class AboutService{
constructor(){
    this.baseUrl=`${process.env.REACT_APP_BASEURL}/abouts`;
}
async getAboutsList(){
    return await axios.get(this.baseUrl).then(resp=>resp.data)
}
async deleteAbouts(id){
    const url=`${this.baseUrl}/${id}`
    return await axios.delete(url).then(resp=>resp.data)
}
async updateAbouts(id,about){
    const url=`${this.baseUrl}/${id}`
    return await axios.put(url,about).then(resp=>resp.data)
}
async addAbouts(about){
    return await axios.post(this.baseUrl,about).then(resp=>resp.data)
}
async getLastAbouts(){
    const url=`${this.baseUrl}/getlastabout`
    return await axios.get(url).then(resp=>resp.data)
}
async getOneAbouts(id){
    const url=`${this.baseUrl}/${id}`
    return await axios.get(url).then(resp=>resp.data)  
}
}

export default AboutService