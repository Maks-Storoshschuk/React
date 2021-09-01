import {useEffect, useState} from "react";
import getMovie from "./services/getMovie";

export default function Movie(){
    let [movies,setMovie] = useState([])
    console.log(movies)
    useEffect(()=>{
        getMovie().then(value => {setMovie([...value.results])});
    }, []);

    return(
        <div>
            {movies.map(value =>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${value.backdrop_path}`} alt=""/>
                </div>
                    <h2>{value.title}</h2>
            </div>)}
        </div>
    )
}