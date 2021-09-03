import Movie from "../MoviesList/movies";

import Genres from "../GenreBadge/genre";
import {Switch,Link,Route} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/movieInfo";

export default function Header(){
    return(
            <div>

                <div className={'d-flex'}>
                    <Switch>
                    <Route  exact path={'/'}>
                        <Movie/>
                        <Genres/>
                    </Route>

                        <Route path={'/:id'} component={MovieInfo}/>

                    </Switch>

                </div>
            </div>
    )
}