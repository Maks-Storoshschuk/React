import {useEffect, useState} from "react";
import {getComments} from "../services/coment.services";
import Coment from "../coment/Coment";

export default function Coments(){
    let [comments,setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value.data]))
        // getComments().then((value => setComments([...value])))
    },[]);
    return(
        <ul>
            {
                comments.map(value => <Coment item={value} key = {value.body} />)
            }
        </ul>
    )
}
