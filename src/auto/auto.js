import {useEffect, useState} from "react";
import {getAuto} from "../auto.services/auto.services";
import Car from "./car";
export function Autos(item){
    let [cars,setCars] = useState([])
    let [filterCar,setFilterCar]=useState([])
    useEffect(()=>{
        getAuto().then(value=>{
            setCars([...value])
        })
    },[item]);
    if ({item}==='odd')
        setFilterCar(cars.filter(value => (value.model.length)%2!==0))
    if ({item}==='all')
        setFilterCar(cars)
    if ({item}==='even')
        setFilterCar(cars.filter(value => (value.model.length)%2===0))
    console.log(filterCar)
    return(
        <div className={'judas'}>
            {
                filterCar.map(value => <Car item={value} key = {value.id}/>)
            }
        </div>
    )
}