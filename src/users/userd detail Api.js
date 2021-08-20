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
            {user.id}. {user.name}.
            {user}
        </div>
    )
}