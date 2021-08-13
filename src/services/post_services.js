
import axios from "axios";
let config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(config);
const getPostsOfUser = (id) => axiosInstance.get(`/users/${id}/posts`);

export {getPostsOfUser};