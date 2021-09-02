import MovieInfo from "../MovieInfo/movieInfo";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

export default function MoviesCard({item}){
    return(
           <Router>
               <div>
                   <div>
                       <Link  to={`/id:${item.id}`}><img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="eror"/>
                           <h2>{item.title}</h2>
                       </Link>
                       <Switch>
                           <Route path={`/id:${item.id}`} render={(item)=>
                               <MovieInfo {...item}/>
                           }/>
                       </Switch>
                   </div>
               </div>
           </Router>
    )
}
