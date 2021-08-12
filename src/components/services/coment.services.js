import axios from "axios";

let config = {
    baseURL:'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(config);
const getComments = ()=>{
    return axiosInstance('/comments')
}
const getComment = (id)=>{
    return axiosInstance(`/posts/${id}/comments`)
}
export {getComment,getComments}
