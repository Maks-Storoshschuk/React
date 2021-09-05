import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './genres.css'
import {getGenresMovies} from "../services/getMovieGenre";
import MoviesCard from "../MoviesListCard/moviescard";

export default function GenresMovie({location: {state : item}}){
    const genresMovie = useSelector(({genresMovie}) => genresMovie)
    console.log(item)
    console.log(genresMovie);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenresMovies(item));
    }, [item]);

    return(
        <div className={'MOVIES'}>

            {genresMovie.map(value => <MoviesCard  item ={value} key={value.id}/>)}

        </div>

    )
}
