import {useEffect, useState} from "react";
import getMovie from "./services/getMovie";

export default function Movie(){
    let [movie,setMovie] = useState([])
    console.log(movie)
    useEffect(()=>{
        getMovie().then(value => {setMovie({...value.results})});
    }, [movie.id]);

    return(
        <div>

        </div>
    )
}