import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../services/user.services";

export default function Users(){

let [users,setUsers] = useState([]);

useEffect(()=>{
    // getUsers().then((value => setUsers([...value])))
    getUsers().then(value => setUsers([...value.data]))
},[]);


    return(
        <div>
            {
                users.map(value => <User item ={value} key={value.id}/>)
            }
        </div>
    )
}