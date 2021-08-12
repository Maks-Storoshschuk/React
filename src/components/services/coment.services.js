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
export {getComments,getComment}
// function getComments(){
//     return fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(value => value.json())
// };
//
// function geComment(id){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//         .then(value => value.json())
// };

