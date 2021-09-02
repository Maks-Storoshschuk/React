import Movie from "../MoviesList/movies";
import './stylesheet.css'
import {useState} from "react";
import Genres from "../GenreBadge/genre";

export default function Header(){
    let [theme,setTheme] =useState('light');

    return(
        <div className={theme}>
            <button onClick={()=>{
                if(theme==="light"){
                    setTheme('dark')
                }
                else if(theme==='dark'){
                    setTheme('light')
                }

            }
            }>change theme</button>
            <div className={'d-flex'}>
                <Movie/>
                <Genres/>
            </div>
        </div>
    )
}