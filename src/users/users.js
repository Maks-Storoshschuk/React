
import {useEffect, useState} from "react";
import User from "./user";
import {getUsers} from "../services/services";


export default function Users(){

    let [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])

return(
    <div>
        {
            users.map(value => <User item ={value} key={value.id}/>)
        }
    </div>
)
}