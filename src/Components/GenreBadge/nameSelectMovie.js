import {useSelector} from "react-redux";

export function GenreName ({genre_ids}){
    const genres = useSelector(({genres}) => genres)

    const genresFilm = genre_ids.join(',');

    const genresName = genres.filter(value => genresFilm.indexOf(value.id) !== -1)

    return(
        <div>
            {
                genresName.map(value => <p>{value.name}</p>)
            }
        </div>
    )
}