import {useReducer} from "react";
import reducer from "./reducer/reducer";

export default function App(){
    let [{state1},dispatch] = useReducer(reducer,{state1:0});
    return(
        <div>
            <h1>state 1 - {state1}</h1>
            <button onClick={()=>dispatch({obj:'10', dija:'+'})}>inc</button>
            <button onClick={()=>dispatch({obj:'2', dija:'-'})}>dec</button>

        </div>
    )
}
