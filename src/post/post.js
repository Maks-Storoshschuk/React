import {useEffect, useState} from "react";
import {Comments} from "../comments/comments";
import {getComment} from "../services/comment_services";

export function Post({item}){
    let [comments,setComments] = useState([])
    useEffect(()=>{
        getComment(item.id).then(({data})=>setComments([...data]))
    },[item.id])
    const [read,writepost]=useState(null)
    const choose = (write) => {
        writepost(write)
    }
    return(
        <div >
            <h3>Назва посту - {item.title}</h3>
            <h4>{item.body}</h4>
            <div className='comment'>
                <h3>Коментарі</h3>
                {
                    comments.map(value =><Comments item={value} key = {value.id} choose = {choose}/> )
                }
                {
                    read && <div>{read}</div>
                }

            </div>

        </div>

    )
}