import {useEffect} from "react";
import {fetchUsersWithThunk,addUserWithThunk} from "./services/UserServicesWithThunk";
import {useDispatch, useSelector} from "react-redux";

export default function App(){

    let state = useSelector(state => state);
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsersWithThunk());
    },[])
    const xuz = (e)=>{
        let user = { name: 'vasia'}
        dispatch(addUserWithThunk(user));
    }
    return(
        <div>
            <button onClick={xuz}>save user</button>
            {state.users.map(value => <div>{value.name}</div>)}
        </div>
    )
}
