import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "./redux/ActionCreators";
import {getUsers, saveUser} from "./services/userservices";

export default function App(){

    let state = useSelector(state=> state);
    let dispatch =useDispatch();
    let {users} = state;

    useEffect(async ()=>{
         let response = await getUsers();
         dispatch(loadUsers(response));

    },[])
    let handleAddUser = async (e)=>{
        let user = {name:'vasia'}
        saveUser(dispatch,user);
    }
    return(
        <div>
            <button onClick={handleAddUser}>add user</button>
            {users.map(value => <div>{value.name}</div>)}
        </div>
    )
}
