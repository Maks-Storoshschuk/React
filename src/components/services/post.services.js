import axios from "axios";
let config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(config);
const getPosts = () =>{
    return axiosInstance.get('/posts')
}
const getPostsOfUser = (id) => axiosInstance.get(`/users/${id}/posts`);

export {getPosts,getPostsOfUser};

