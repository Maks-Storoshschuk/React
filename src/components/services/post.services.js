import axios from "axios";
let config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(config);
const getPosts = () =>{
    return axiosInstance.get('/posts')
}
const getPost = (id) =>{
    return axiosInstance.get(`/posts/${id}`);
}
export {getPosts,getPost};


// function getPosts(){
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
// }
//
// function getPost(id){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(value => value.json())
// }
//
// export {getPosts,getPost}