import {useEffect, useState} from "react";
import {delAuto, editauto, getAuto} from "../auto.services/auto.services";
import Car from "./car";
export default function Auto(){
    let [cars,setCars] = useState([])
    useEffect(()=>{
        getAuto().then(value=>{
            setCars([...value])
        })
    },[]);
    let refreshCar= (item)=>{
        editauto(item)
            .then(value => {
                getAuto().then(value=>{
                    setCars([...value])
                })
            })

    }
    let deleteCar = (id)=>{
            delAuto(id).then(value => {if(value) console.log('Видалено!')}

                );
            let filterCar = cars.filter(value => value.id!==id);
            setCars([...filterCar])
        }
    return(
        <div className={'judas'}>
            {
                cars.map(value => <Car item={value} key = {value.id} deleteCar ={deleteCar} refreshCar={refreshCar}/>)
            }
        </div>
    )

}



