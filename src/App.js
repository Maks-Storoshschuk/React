import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import './App.css'
import Users from "./users/users";
import Posts from "./posts/posts";
import Comments from "./comments/comments";
export default function App(){
    return(
        <Router>
            <div>
                <Link to={'/'}>Refresh</Link>
                <Link to={'/users-page'}>User</Link>
                <Link to={'/posts-page'}>Posts</Link>
                <Link to={'/comments-page'}>Comments</Link>
            </div>
            <Route path={'/users-page'}>
                <Users/>
            </Route>
            <Route path={'/posts-page'}>
                <Posts/>
            </Route>
            <Route path={'/comments-page'}>
                <Comments/>
            </Route>
            <Route path={'/'}>

            </Route>
        </Router>

    )
}
App()