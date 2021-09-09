import Movie from "../MoviesList/movies";
import {Switch, Route, Link} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/movieInfo";
import GenresMovie from "../GenreStaff/genreMovie";
import logo from  './Pinball.PNG'
import user from '../UserInfo/Borat.jpg'
import './header.css'
import Genres from "../GenreStaff/genres";
import {useState} from "react";
console.log(logo)
export default function Header(){
    let [theme,setTheme] =useState('light');
    return(
            <div className={theme}>
                <div className={'Main'}>
                    <div className={'header'}>
                        <img src={logo} alt="error"/>
                        <form>
                            <input type="text"/>
                        </form>
                        <div><img src={user} alt="error"/><h4>Welcome Borat</h4></div>
                    </div>
                    <div className={'themeHome'}>
                        <Link to={'/'}>Home</Link>
                        <button onClick={()=>{
                            if(theme==="light"){
                                setTheme('dark')
                            }
                            else if(theme==='dark'){
                                setTheme('light')
                            }
                        }
                        }>Night</button>
                    </div>

                    <div className={'d-flex'}>
                        <Switch>
                            <Route path={'/genre/'} component={GenresMovie}/>
                            <Route path={'/:id'} component={MovieInfo}/>
                            <Route  exact path={'/'}>
                                <Movie/>
                            </Route>

                        </Switch>
                        <Genres/>


                    </div>
                </div>
            </div>
    )
}