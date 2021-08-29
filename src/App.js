import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/users.api";
import {CLEAR_STORE, fetch_Users, pushUser} from "./redux/actions";

export default function App(){
    let state = useSelector(state =>state);
    let dispatch = useDispatch();
    let {users}=state;
useEffect(()=>{
    fetchUsers().then(value => {
        dispatch(fetch_Users(value))
    });
},[])
    let onSubmit = (e)=>{
    e.preventDefault();
        let name = e.target.name.value;
        let user = {name};
        addUser(user).then(value => {
            console.log('saved user',value);
            dispatch(pushUser(value))
        })
    };
    let onClickC = ()=>{
        dispatch({type: CLEAR_STORE});
    };
    let onClickS=()=>{
        fetchUsers().then(value => {console.log(value);
            dispatch(fetch_Users(value))
        });
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name={'name'}/>
                <button>add user</button>
            </form>
            <button onClick={onClickC}>
                clear users
            </button>
            <button onClick={onClickS}>
                set users to store
            </button>
            {
                users.map((value)=><div key={value.id}>{value.id}. {value.name}</div>)
            }
        </div>
    )
}