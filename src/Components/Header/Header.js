import Movie from "../MoviesList/movies";

import {Switch,Route} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/movieInfo";
import GenresMovie from "../GenreBadge/genreMovie";

export default function Header(){
    return(
            <div className={'Main'}>

                <div>
                    <Switch>
                        <Route path={'/genre/'} component={GenresMovie}/>
                        <Route path={'/:id'} component={MovieInfo}/>
                    <Route  exact path={'/'}>
                        <Movie/>
                    </Route>

                    </Switch>


                </div>
            </div>
    )
}