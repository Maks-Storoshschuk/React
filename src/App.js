import Form from "./form/form";
import './App.css'
import Auto from "./auto/auto";
import {useState} from "react";

export default function App(){
    let [currentCar, setCurrentCar] = useState([]);

    return(
        <div>
            <Form setCurrentCar={setCurrentCar}/>
            <Auto currentCar={currentCar}/>
        </div>
    )
}
