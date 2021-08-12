import axios from 'axios';

let config = {
    baseURL:'https://jsonplaceholder.typicode.com'
};
let axiosInstence = axios.create(config);

const getUsers = ()=>{
    return axiosInstence.get('/users')
}
const getUser = (id)=>{
    return axiosInstence(`/users/${id}`)
}
export {getUsers,getUser}

// function getUsers(){
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
// }
//
// function getUser(id){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(value => value.json())
// }
//
// export {getUsers,getUser}
