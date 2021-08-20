import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Users from "./users/Users";

export default function App(){
    return(
        <Router>
            <div>
                <Link to ={'/users'}>User Page</Link>
                <div>
                   <Switch>
                       <Route path={'/users'} component={Users}/>
                   </Switch>

                </div>
            </div>

        </Router>
    )
}