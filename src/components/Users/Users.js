import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../services/user.services";
import User from "../user/User";

export default function Users(){

    let [users,setUsers] = useState([])


    useEffect(()=>{
        getUsers().then(({data})=>{setUsers([...data])})
    }, []);
    return(
        <div>

            {
                users.map(value => <User item = {value} key={value.id}/>)
            }

        </div>
    );
}