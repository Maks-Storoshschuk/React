import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import './App.css'
import {Autos} from "./auto/auto";

export default function App(){
    return(
        <Router>
            <div>
                <Link to={'/'}>Домашня сторінка</Link>
                <Link to={'/all'}>Всі авто</Link>
                <Link to={'/even'}>Авто з парною кількістю літер</Link>
                <Link to={'/odd'}>Авто з непарною кількістю літер</Link>
            </div>
            <div>
                <Switch>

                    <Route path={'/all'} render={(props)=><Autos param={props}/>}/>
                    <Route path={'/even'} render={(props)=><Autos param={props}/>}/>
                    <Route path={'/odd'} render={(props)=><Autos param={props} />}/>
                </Switch>
            </div>
        </Router>

    )
}