import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import {Route} from "react-router-dom";
import Post from "./Post";
import PostDetails from "./posts detail";

export default function Posts(props){
    let {match:{url},history}=props;
    let [posts,setPosts] = useState([]);
    useEffect(  ()=>{
        getPosts().then(value => {setPosts([...value])})


    },[])
    return(
        <div className={'Posts'}>
            <div> {posts.map(value=><Post history={history} item={value} key={value.id}/>)}</div>
            <div><Route path={`${url}/:id`} render={(props)=>{
                return <PostDetails {...props}/>
            }}/></div>


        </div>

    )
}