import {useEffect, useState} from "react";
import {getUser} from "../services/services";

export default function UserDetailApi(props){
    let {match:{params:{id}}} = props
    let [user,setuser] = useState([])
    console.log(id)
    useEffect(()=>{
        getUser(id).then(value =>setuser([...value]))
    },[id])
    return(
        <div>
            <h2>{item.id} {item.name} {}</h2>
            <h3>{item.username}. {item.email}</h3>
        </div>
    )
}