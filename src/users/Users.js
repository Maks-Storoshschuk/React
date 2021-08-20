import {useEffect, useState} from "react";
import {getUsers} from "../services/services";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails from "./user details";

export default function Users(props){
    let {match:{url}}=props;
    let [users,setUsers] = useState([]);
    useEffect( async ()=>{
        let response = await getUsers()
            setUsers([...response])

    },[])
    return(
        <div>
            {users.map(value=><User item={value} key={users.id}/>)}
            <hr/>
            <Route path={`${url}/:id`} component={UserDetails}/>
        </div>

    )
}