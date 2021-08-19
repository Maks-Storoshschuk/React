import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import './App.css'
import Autos from "./auto/auto";
export default function App(){
    return(
        <Router>
            <div>
                <Link to={'/'}>Всі авто</Link>
                <Link to={'/even'}>Авто з парною кількістю літер</Link>
                <Link to={'/odd'}>Авто з непарною кількістю літер</Link>
            </div>
            <Route path={'/'}>
                <Autos/>
            </Route>
        </Router>

    )
}
App()