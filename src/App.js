import Users from "./users/users";
import './App.css'
import Comments from "./comments/comments";
export default function App(){
    return(
        <div>
            <Users/>
            <h2>----------------------------------------------наступне завдання------------------------------------------</h2>
            <Comments/>
        </div>
    )
}
App()