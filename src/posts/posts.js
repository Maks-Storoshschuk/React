import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import Post from "./post";

export default function Posts(){
    let[posts,setPosts] =useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    },[])

    return(
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/> )
            }
        </div>
    )
}