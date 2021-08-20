import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import UserDetails from "./user details";

export default function User({item}){
    return(
        <Router>
            <div>
                {item.id}. {item.name}.
                <Link to={`/users/${item.id}`}>UserDetails</Link>
            </div>
        </Router>
    )
}