import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './genres.css'
import {getGenresMovies} from "../services/getMovieGenre";
import MoviesCard from "../MoviesListCard/moviescard";

export default function GenresMovie(){

    const genresMovie = useSelector(({genresMovie}) => genresMovie)

    console.log(genresMovie);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenresMovies());
    }, []);

    return(
        <div className={'movies'}>

            {genresMovie.map(value => <MoviesCard  item ={value} key={value.id}/>)}

        </div>

    )
}
