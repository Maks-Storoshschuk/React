import {useEffect, useState} from "react";
import {getUsers} from "../services/services";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetailApi from "./userd detail Api";

export default function Users(props){
    let {match:{url}}=props;
    let [users,setUsers] = useState([]);
    useEffect( async ()=>{
        let response = await getUsers()
            setUsers([...response])

    },[])
    return(
        <div>
            {users.map(value=><User item={value} key={value.id}/>)}
            <hr/>
            <Route path={`${url}/:id`} render={(props)=>{
                return <UserDetailApi {...props}/>
            }}/>
        </div>

    )
}