import {useEffect, useState} from "react";
import {getPosts} from "../services/post.services";
import Post from "../post/Post";

export default function Posts(){

    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then((value => setPosts([...value.data])))
        // getPosts().then((value => setPosts([...value])))
    },[]);

    return(
        <ol>
            {
                posts.map(value=> <Post item={value} key = {value.body}/>)
            }
        </ol>
    )
}