import {useEffect, useState} from "react";
import User from "../user/user";
import {getUsers} from "../services/user.services";

export default function Users(){
    let [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);
    const [post,chooseBody]=useState(null)
    const choose = (postBody) => {
        chooseBody(postBody)
    }
    return(
        <div className={'d-flex'}>
            <div>
                <h2><i>Ім'я користувача</i></h2>
                {
                    users.map(value => <User item ={value} key ={value.id} choose ={choose}/>)
                }
            </div>
            {
                post && <div className={'percent'}>  <h2>Пости користувача</h2>  - {post} </div>
            }
        </div>

    )

}