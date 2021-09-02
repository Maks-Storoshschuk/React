import {useState} from "react";
import MovieInfo from "../MovieInfo/movieInfo";

export default function MoviesCard({item}){
    let [info,setInfo]=useState('')
    let loadInfo =()=>{
        setInfo(MovieInfo({item}))
    }
    return(
        <div>
            <div>

                <button onClick={loadInfo}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="eror"/>
                    <h2>{item.title}</h2>
                </button>
                {info}
            </div>
        </div>
    )
}
