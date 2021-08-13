
import axios from "axios";
let config = {
    baseURL:'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(config);
const getComment = (id)=>{
    return axiosInstance(`/posts/${id}/comments`)
}
export {getComment}