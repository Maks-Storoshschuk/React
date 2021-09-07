import LinearWithValueLabel from "../line/line";
import './movieInfo.css'
import {useState} from "react";
import LoadInfo from "./loadMoviesInfo";
export function MovieInfo({location: {state : item}}){
    let[loadInfo,setLoadInfo]=useState('')
    return(
        <div className={'info'}>

            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="erorr"/>
            <LinearWithValueLabel rating={item.vote_average*10}/>
            <h3>Original Title: <i>{item.original_title}</i>.<br/>
                Overview: <i>{item.overview}</i>. <br/>
                Popularity: <i>{item.popularity}</i>.<br/>
                Release date: <i>{item.release_date}</i>.<br/>
                Vote average: <i>{item.vote_average}</i>.<br/>
                Vote count: <i>{item.vote_count}</i>.
            </h3>
            <button onClick={()=>{setLoadInfo(<LoadInfo item={item.id} key={item.id}/>)}
            }>Load More information</button>
            <div>
                {loadInfo}
            </div>
        </div>
    )
}