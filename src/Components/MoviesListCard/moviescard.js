import {Link,} from "react-router-dom";
import Stars from "../StarsRating/star-rating";

export default function MoviesCard({item}){

    return(
        <div>
            <div>
                <Link  to={{pathname: `/:${item.id}`, state: item}}><img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="eror"/>
                    <h2>{item.title}</h2>
                </Link>
               <Stars item={item.vote_average}/>
            </div>
        </div>
    )
}
