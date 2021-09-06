import LinearWithValueLabel from "../line/line";
import './movieInfo.css'
export function MovieInfo({location: {state : item}}){
    return(
        <div className={'info'}>

            <h2>{item.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="eror"/>
            <LinearWithValueLabel rating={item.vote_average*10}/>
            <h3>Original Title: <i>{item.original_title}</i>.<br/>
                Overview: <i>{item.overview}</i>. <br/>
                Popularity: <i>{item.popularity}</i>.<br/>
                Release date: <i>{item.release_date}</i>.<br/>
                Vote average: <i>{item.vote_average}</i>.<br/>
                Vote count: <i>{item.vote_count}</i>.
            </h3>
        </div>
    )
}