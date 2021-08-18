import {useEffect, useState} from "react";
import {delAuto, getAuto} from "../auto.services/auto.services";
import Car from "./car";

export default function Auto(){
    let [cars,setCars] = useState([])
    useEffect(()=>{
        getAuto().then(value=>{
            setCars([...value])
        })
    },[]);
    let deleteCar = (id)=>{
            delAuto(id).then(value => console.log(value));
            let filterCar = cars.filter(value => value.id!==id);
            setCars([...filterCar])
        }
    // let setSetAuto = (id)=>{
    //
    // }
    return(
        <div className={'judas'}>
            {
                cars.map(value => <Car item={value} key = {value.id} deleteCar ={deleteCar} />)
            }
        </div>
    )
}



