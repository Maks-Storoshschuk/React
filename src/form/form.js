import {useState} from "react";
import {saveAuto} from "../auto.services/auto.services";

export default function Form(){

    let [model,setModel] = useState('model')
    let [price,setPrice] = useState('price')
    let [year,setYear] = useState('year')
    let [auto,setAuto] = useState({model: '', price: '',year: ''})

    let onsubmitForm = (e)=>{
        e.preventDefault();
        let tempAuto = {model,price,year}
        setAuto({...tempAuto})
        saveAuto(tempAuto)
    }
    console.log(auto)

    const changeModel = (e)=>{
        setModel(e.target.value)
    }
    const changePrice = (e)=>{
        setPrice(e.target.value)
    }
    const changeYear = (e)=>{
        setYear(e.target.value)
    }
    return(
        <div>
            <form onSubmit={onsubmitForm}>
                <div >
                    <input type="text" name={'model'} value={model} onInput={changeModel}/>
                    <input type="text" name={'price'} value={price} onInput={changePrice}/>
                    <input type="text" name={'year'} value={year} onInput={changeYear}/>
                </div>
                <div>
                    <button>SAVE</button>
                </div>

            </form>
            <div>ви відправили на сервер
                <div><h3>Модель авто <i>{model}</i>. <i>Ціна авто {price}</i>. <i>Рік випуску {year}</i></h3>
                </div>





            </div>

        </div>
    )
}