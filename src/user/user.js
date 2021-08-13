import {getPostsOfUser} from "../services/post_services";
import {useEffect, useState} from "react";
import {Post} from "../post/post";

export default function User({item,choose}){
    let [posts,setPosts] = useState([])

    useEffect(()=>{
        getPostsOfUser(item.id).then(({data})=>setPosts([...data]))
    }, []);
    return(
        <div>
            <h2>{item.name}</h2>


            <button onClick={()=> {choose (
                <div>
                    {
                        posts.map(value => <Post item={value} key={value.id}/>)
                    }
                </div>
            ) }}>info</button>
        </div>
    )
}
