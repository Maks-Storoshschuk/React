let url = 'https://jsonplaceholder.typicode.com/'
function getUsers(){
    return(
        fetch(`${url}users`)
        .then(value => value.json())
    )
}
function getPosts(){
    return(
        fetch(`${url}posts`)
            .then(value => value.json())
    )
}
function getComment(){
    return(
        fetch(`${url}comments`)
            .then(value => value.json())
    )
}
export {getUsers,getPosts,getComment}