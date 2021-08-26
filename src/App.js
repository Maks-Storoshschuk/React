import {useReducer} from "react";
import reducer from "./reducer/reducer";


export default function App(){
    let [{a,b,c},dispatch] = useReducer(reducer,{a:0,b:0,c:0});
    return(
        <div>
            <h1>A = {a}</h1>
            <button onClick={()=>dispatch({obj:'1', dija:'+'})}>inc</button>
            <button onClick={()=>dispatch({obj:'1', dija:'-'})}>dec</button>
            <h1>B = {b}</h1>
            <button onClick={()=>dispatch({obj:'2', dija:'+'})}>inc</button>
            <button onClick={()=>dispatch({obj:'2', dija:'-'})}>dec</button>
            <h1>C = {c}</h1>
            <button onClick={()=>dispatch({obj:'3', dija:'+'})}>inc</button>
            <button onClick={()=>dispatch({obj:'3', dija:'-'})}>dec</button>

        </div>
    )
}
