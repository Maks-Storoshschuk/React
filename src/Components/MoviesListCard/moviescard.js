import {Link,} from "react-router-dom";
import Stars from "../StarsRating/star-rating";
import {GenreName} from "../GenreStaff/nameSelectMovieGenre";
import './moviescard.css'

export default function MoviesCard({item}){
    return(
        <div className={"MOCA"}>
            <Link  to={{pathname: `/id:${item.id}`, state: item}}><img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="eror"/>
                <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="eror"/>
            </Link>
            <h2 >{item.title}</h2>
            <i>{item.overview}</i>
            <Stars item={item.vote_average} />
            <div className={'genre_under_movies'}>
                <GenreName genre_ids={item.genre_ids}/>
            </div>


        </div>
    )
}
