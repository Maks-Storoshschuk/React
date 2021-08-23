import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Users from "./users/Users";
import Posts from "./posts/posts";

export default function App(){
    return(
        <Router>
            <div>
                <div className={'mainLink'}>
                    <Link to ={'/users'}>Users Page</Link>
                    <Link to ={'/'}>Main Menu</Link>
                    <Link to ={'/posts'}>Posts Page</Link>
                </div>

                <div>
                    <Switch>
                       <Route path={'/users'} component={Users}/>
                    </Switch>
                    <Switch>
                        <Route path={'/'}/>
                    </Switch>
                    <Switch>
                        <Route path={'/posts'} component={Posts}/>
                    </Switch>

                </div>
            </div>

        </Router>
    )
}