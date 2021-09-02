import {useSelector} from "react-redux";

export default function MovieInfo(item){
    let {match:{params}}=item
    console.log(params)
    const movies = useSelector(({movies}) => movies)
    console.log(movies)
    return(
        <div>
            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="eror"/>
            <h4>Original Title: {item.original_title}.
                Overview: {item.overview}.
                Popularity: {item.popularity}.
                Release date: {item.release_date}.
                Vote average: {item.vote_average}.
                Vote_count: {item.vote_count}
            </h4>
        </div>
    )
}