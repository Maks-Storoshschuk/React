import {useEffect, useState} from "react";
import {getAuto} from "../auto.services/auto.services";
import Car from "./car";
export function Autos({param}){
    const {url} = param.match
    let [cars,setCars] = useState([])
    useEffect(()=>{
        getAuto().then(value=>{
            setCars([...value])
        })
    },[]);

    switch (url) {
        case '/all':
            return cars.map(value => <Car item={value} key={value.id}/>);
        case '/even':
            return cars.filter(value => (value.model.length)%2===0).map(value => <Car item={value} key={value.id}/>)
        case '/odd':
            return cars.filter(value => (value.model.length)%2!==0).map(value => <Car item={value} key={value.id}/>)
        default:
            return <h1>OGO</h1>
    }

}