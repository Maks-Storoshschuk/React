import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../services/getServices";
import './genres.css'
import {Link} from "react-router-dom";
export default function Genres(){
    const genres = useSelector(({genres}) => genres)

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getServices());
    });


    return(
        <div className={'genre'}>
            {genres.map(value => <Link key={value.id}  to={{pathname: `/genre/${value.name}`,state: value.id}}><p>{value.name}</p></Link>)}
        </div>
    )
}