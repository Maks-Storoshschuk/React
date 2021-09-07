import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getInfo} from "../services/getServices";

export default function LoadInfo({item}){

    const Info = useSelector(({Info}) => Info)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getInfo(item));
    },[dispatch,item]);

    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${Info.poster_path}`} alt="error"/>
            <h3>Budget: <i>{Info.budget} $.</i></h3>
            <h3>Homepage: <a href={Info.homepage}>{Info.homepage}</a></h3>
            <h3>IMDB i: <i>{Info.imdb_id}.</i></h3>
            <h3>Original language: <i>{Info.original_language}.</i></h3>

            <h3>Revenu: <i>{Info.revenue}.</i></h3>
            <h3>Runtim: <i>{Info.runtime}.</i></h3>
            <h3>Status: <i>{Info.status}.</i></h3>
            <h3>Taglin: <i>{Info.tagline}</i></h3>
        </div>
    )

}
