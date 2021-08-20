import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./users/Users";

export default function App(){
    return(
        <Users/>

    )
}