import {useState} from "react";
import {saveAuto} from "../auto.services/auto.services";

export default function Form(){

    let [model,setModel] = useState([])
    let [price,setPrice] = useState([])
    let [year,setYear] = useState([])
    let [auto,setAuto] = useState({model: '', price: '',year: ''})

    let onsubmitForm = (e)=>{
        let tempAuto = {model,price,year}
        setAuto({...tempAuto})
        saveAuto(tempAuto)
        e.preventDefault()
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
                    <input type="text" name={'model'} placeholder={'model'} onInput={changeModel}/>
                    <input type="text" name={'price'} placeholder={'price'} onInput={changePrice}/>
                    <input type="text" name={'year'} placeholder={'year'} onInput={changeYear}/>
                </div>
                <div>
                    <button>SAVE</button>
                </div>
            </form>
        </div>
    )
}