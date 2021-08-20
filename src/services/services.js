const url = 'https://jsonplaceholder.typicode.com/'
const getUsers=()=>{
    return(
        fetch(`${url}users`)
            .then(value => value.json())
    )

}
const getPosts=()=>{
        fetch(`${url}posts`)
            .then(value => value.json())

}
export {getUsers,getPosts}