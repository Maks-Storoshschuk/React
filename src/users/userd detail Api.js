import {useEffect, useState} from "react";
import {getUser} from "../services/services";

export default function UserDetailApi(props){
    let {match:{params:{id}}} = props
    console.log(props)
    let [user,setuser] = useState({})

    useEffect(()=>{
        getUser(id).then(value => {setuser({...value})}
            )
    },[id])
    return(
        <div className={'UserInfo'}>
            <h2>{user.id} {user.name}</h2>
            <h3>{user.username}. {user.email}</h3>
        </div>

    )
}