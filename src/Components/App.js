import Header from "./Header/Header";
import {useState} from "react";
import {Link,BrowserRouter as Router,} from "react-router-dom";
import './stylesheet.css'
import GenresMovie from "./GenreBadge/genreMovie";
import {GenreName} from "./GenreBadge/nameSelectMovieGenre";
import Genres from "./GenreBadge/genre";
import './stylesheet.css'

const App = () => {
    let [theme,setTheme] =useState('light');
    return (
        <Router>
        <div className={theme}>
            <div>
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
                    <Header/>
                    <Genres/>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default App;