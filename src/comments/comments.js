import {useEffect, useState} from "react";
import {getComment} from "../services/comment_services";
import Comment from "../comment/comment";
export default function Comments(item){
    let [comments,setComments] = useState([])
    useEffect(()=>{
        getComment().then(value => setComments([...value]))
    },[])
    const [body,chooseBody]=useState(null)
    const choose = (postBody) =>{
    chooseBody(postBody)
    }

    return <div className={'d-flex'}>
        <div> {
            comments.map(value => <Comment item={value} key={value.id} choose={choose}/> )
        }</div>
        {
            body && <div>  Тіло коментаря  - {body} </div>
        }
    </div>

}
