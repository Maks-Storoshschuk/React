function getComments(){
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
}

function geComment(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
}

export {getComments,geComment}