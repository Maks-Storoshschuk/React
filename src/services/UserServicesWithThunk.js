import {addUser, loadUsers} from "../redux/ActionCreators";

const fetchUsersWithThunk= ()=> async (dispatch)=>{
    let response = await  (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    dispatch(loadUsers(response));
}
const addUserWithThunk =(userData)=> async (dispatch)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{
            'Accept' : 'application/json',
            'content-Type' : 'application/json',
        },
        body:JSON.stringify({
            name: userData.name
        })
    })
    let savedUser = await response.json()
    dispatch(addUser(savedUser))
}
export {fetchUsersWithThunk,addUserWithThunk}