import {delAuto} from "../auto.services/auto.services";
import {useState} from "react";
import EditForm from "../form/newedit";

export default function Car({item}){
    let[refresh,setRefresh]=useState('d-flex')
    let[editForm,setEditForm]=useState('')
    return(
        <div className={refresh}>
            <img src="https://png.pngtree.com/png-vector/20190510/ourlarge/pngtree-vector-car-icon-png-image_1028600.jpg" alt="img"/>
            <h2>{item.id}. Модель автомобіля: {item.model}. Ціна: {item.price}. Рік випуску: {item.year}.</h2>
            <div className={'dvaBatonu'}>
                <button onClick={ ()=>{
                    delAuto(item);
                    if(refresh==='d-flex'){
                        setRefresh('d-none')
                    }
                }
                }>DELETE</button>
                <button onClick={()=>{
                    setEditForm(<EditForm item={item}/>)
                }}>EDIT</button>
            </div>
            <div>
                {editForm}
            </div>
        </div>
    )
}