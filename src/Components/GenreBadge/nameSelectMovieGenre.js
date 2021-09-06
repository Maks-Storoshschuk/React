import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export function GenreName ({genre_ids}){
    const genres = useSelector(({genres}) => genres)

    const genresFilm = genre_ids.join(',');

    const genresName = genres.filter(value => genresFilm.indexOf(value.id) !== -1)
    return(
        <div>

                {
                    genresName.map(value => <Link key={value.id} to={{pathname: `/genre/${value.name}`,state: value.id}}><p>{value.name}</p></Link>)
                }


        </div>
    )
}