import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../services/getGenres";
import './genres.css'
export default function Genres(){
    const genres = useSelector(({genres}) => genres)
    console.log(genres);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getGenres());
    }, []);


    return(
        <div>
            {genres.map(value => <div className={'genres'}>{value.name}</div>)}
        </div>
    )
}