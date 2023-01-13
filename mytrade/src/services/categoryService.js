import axios from "axios"

class CategoryService{
constructor(){
    this.baseUrl=`${process.env.REACT_APP_BASEURL}/categories`
}
async getCategoryList(){
    return await axios.get(this.baseUrl).then(resp=>resp.data)
}
async getOneCategory(id){
    const url=`${this.baseUrl}/${id}`
    return await axios.get(url).then(resp=>resp.data)
}
async getAddCategory(category){
    return await axios.post(this.baseUrl,category).then(resp=>resp.data)
}
async getUpdateCategory(id,category){
    const url=`${this.baseUrl}/${id}`
    return await axios.put(url,category).then(resp=>resp.data)
}
async getDeleteCategory(id){
    const url=`${this.baseUrl}/${id}`
    return await axios.delete(url).then(resp=>resp.data)
}
async getLastCategory(){
    const url=`${this.baseUrl}/getlastcategory`
    return await axios.get(url).then(resp=>resp.data)
}
async popularCategory(){
    const url=`${this.baseUrl}/popularcategory`
    return await axios.get(url).then(resp=>resp.data)
}
async categoryActive(id){
    const url=`${this.baseUrl}/categoryactive/${id}`
    return await axios.get(url).then((resp)=>resp.data)
}
async categoryPassive(id){
    const url=`${this.baseUrl}/categorypassive/${id}`
    return await axios.get(url).then((resp)=>resp.data)
}
}
export default CategoryService