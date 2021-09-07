import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './genres.css'
import MoviesCard from "../MoviesListCard/moviescard";
import {getGenresMovies} from "../services/getServices";

export default function GenresMovie({location: {state : item}}){
    const genresMovie = useSelector(({genresMovie}) => genresMovie)
    const dispatch = useDispatch();
    let [page,setPage] = useState(1)
    useEffect(()=>{
        dispatch(getGenresMovies(item,page));
    }, [dispatch,item,page]);
    return(
        <div className={'MOVIES'}>

            {genresMovie.map(value => <MoviesCard  item ={value} key={value.id}/>)}

            <div className={'d-flex navigation'}>
                <button onClick={()=>{if (page>=2){setPage(page-1)}}}> Prev</button>
                <p>{page}</p>
                <button onClick={()=>{if (page<=499){setPage(page+1)}}}>Next</button>
            </div>

        </div>

    )
}
