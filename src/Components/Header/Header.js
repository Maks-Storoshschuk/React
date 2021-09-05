import Movie from "../MoviesList/movies";
import {Switch,Route} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/movieInfo";
import GenresMovie from "../GenreBadge/genreMovie";
import logo from  './Pinbal.PNG'
import user from './Borat.jpg'
import './header.css'
import Genres from "../GenreBadge/genre";
console.log(logo)
export default function Header(){
    return(
            <div className={'Main'}>
                <div className={'header'}>
                    <img src={logo} alt="eror"/>
                    <form>
                        <input type="text"/>
                    </form>
                    <h4><img src={user} alt="eror"/>Welcome Borat</h4>
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
    )
}