const fetchUsers = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
export {fetchUsers}