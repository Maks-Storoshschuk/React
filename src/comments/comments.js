import {useEffect, useState} from "react";
import {getComment} from "../services/services";
import Comment from "./comment";

export default function Comments(){
    let[comments,setComments] = useState([]);
    useEffect(()=>{
        getComment().then(value => setComments(...[value]))
    },[])
    return(
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/> )
            }
        </div>
    )

}