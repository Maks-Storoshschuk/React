import {useEffect, useState} from "react";
import {getUsers} from "../services/services";
import {Route} from "react-router";
import User from "./User";

export default function Users(){
    let [users,setUsers] = useState([]);
    useEffect( ()=>{
        getUsers().then(value =>value )
        setUsers([...value])
    },[])
    return(
        <div>
            {users.map(value=><User item={value} key={users.id}/>)}
            <hr/>
            {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
        </div>

    )
}