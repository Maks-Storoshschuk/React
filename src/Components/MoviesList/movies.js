import {useEffect} from "react";
import {getMovies} from "../services/getMovie";
import {useDispatch, useSelector} from "react-redux";
import MoviesCard from "../MoviesListCard/moviescard";
import './movie.css'

export default function Movie(){

    const movies = useSelector(({movies}) => movies)

    console.log(movies);


    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getMovies());
    }, []);


    return(
        <div className={'MOVIES'}>

            {movies.map(value => <MoviesCard  item ={value} key={value.id}/>)}

        </div>

    )
}