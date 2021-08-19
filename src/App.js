import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import './App.css'
import {Autos} from "./auto/auto";

export default function App(){
    let odd='odd'
    let all='all'
    let even = 'even'
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

                    <Route path={'/all'} render={()=><Autos item={all}/>}/>
                    <Route path={'/even'} render={()=><Autos item={even}/>}/>
                    <Route path={'/odd'} render={()=><Autos item={odd} />}/>
                </Switch>
            </div>
        </Router>

    )
}