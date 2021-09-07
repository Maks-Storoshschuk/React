import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MoviesCard from "../MoviesListCard/moviescard";
import './movie.css'
import {getMovies} from "../services/getServices";


export default function Movie(){

    const movies = useSelector(({movies}) => movies)

    const dispatch = useDispatch();

    let [page,setPage] = useState(1)
    useEffect(()=>{
        dispatch(getMovies(page));
    }, [dispatch,page]);
    return(
        <div className={'MOVIES'}>

            {movies.map(value => <MoviesCard  item ={value} key={value.id}/>)}

            <div className={'d-flex navigation'}>
                <button onClick={()=>{if (page>=2){setPage(page-1)}}}>Prev</button>
                <p>{page}</p>
                <button onClick={()=>{if (page<=499){setPage(page+1)}}}>Next</button>
            </div>
        </div>

    )
}