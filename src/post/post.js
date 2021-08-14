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
    const [bodyPostComment,createPC]=useState(null)
    const baton =(build)=>{
        createPC(build)
    }

    return(
        <div >
            <h3>Назва посту - {item.title}</h3>
            <button onClick={()=>{baton(
                <div className={'bodyPost&comment'}>
                    <h4>{item.body}</h4>
                    <div className='comments'>
                        <h3>Коментарі</h3>
                        {
                            comments.map(value =><Comments item={value} key = {value.id} choose = {choose}/> )
                        }

                    </div>

                </div>

            )}}>Look at post</button>
            {
                bodyPostComment && <div>{bodyPostComment}</div>
            }
            {
                read && <div className='comment'>{read}</div>
            }
        </div>

    )
}