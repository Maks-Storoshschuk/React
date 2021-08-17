import {useEffect, useState} from "react";
import {getAuto} from "../auto.services/auto.services";
import Car from "./car";

export default function Auto(){
    let [cars,setCars] = useState([])
    useEffect(()=>{
        getAuto().then(value=>setCars(value))
    },[])
    return(
        <div className={'judas'}>
            {
                cars.map(value => <Car item={value} key = {value.id} />)
            }
        </div>
    )

}