import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./services/users.api";
import {FETCH_USERS} from "./redux/actions";

export default function App(){
    let state = useSelector(state =>state);
    let dispatch = useDispatch();
    let {users}=state;
useEffect(()=>{
    fetchUsers().then(value => {console.log(value);
    dispatch({type: FETCH_USERS,payload:value})
    });
},[])
    return(
        <div>
            {
                users.map((value)=><div>{value.name}</div>)
            }
        </div>
    )
}