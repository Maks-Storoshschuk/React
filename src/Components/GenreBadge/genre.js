import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../services/getGenres";
import './genres.css'
import {Link} from "react-router-dom";
export default function Genres(){
    const genres = useSelector(({genres}) => genres)
    console.log(genres);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getGenres());
    }, []);


    return(
        <div>
            {genres.map(value => <Link  to={{pathname: `/genre/id:${value.id}`,state: value.id}}><p>{value.name}</p></Link>)}
        </div>
    )
}