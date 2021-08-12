import {Post} from '../post/Post'
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../services/post.services";

export default function User({item}){
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        getPostsOfUser(item.id).then(({data})=>setPosts([...data]))
    }, []);
    return(
        <div>
            <h2>Ім'я користувача - {item.name}</h2>
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        </div>
    )
}
