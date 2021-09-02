import Movie from "../MoviesList/movies";
import './stylesheet.css'
import {useState} from "react";
import Genres from "../GenreBadge/genre";
import {BrowserRouter as Router, Switch,Link,Route} from "react-router-dom";

export default function Header(){
    let [theme,setTheme] =useState('light');

    return(
        <Router>
            <div className={theme}>
                <Link to={'/'}>Home</Link>
                <button onClick={()=>{
                    if(theme==="light"){
                        setTheme('dark')
                    }
                    else if(theme==='dark'){
                        setTheme('light')
                    }

                }
                }>change theme</button>
                <div className={'d-flex'}>
                    <Route  exact path={'/'}>
                        <Movie/>
                        <Genres/>
                    </Route>
                </div>
            </div>
        </Router>
    )
}