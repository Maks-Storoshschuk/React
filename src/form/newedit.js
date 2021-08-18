import {useState} from "react";
import {editauto} from "../auto.services/auto.services";

export default function EditForm({item}){
    let [model,setModel] = useState([])
    let [price,setPrice] = useState([])
    let [year,setYear] = useState([])
    let [auto,setAuto] = useState({model: '', price: '',year: ''})

    let onsubmitForm = (b)=>{
        let id =item.id
        let tempAuto = {model,price,year,id}
        setAuto({...tempAuto})
        editauto(tempAuto)
        b.preventDefault()

    }
    console.log(auto)

    const changeModel = (b)=>{
        setModel(b.target.value)
    }
    const changePrice = (b)=>{
        setPrice(b.target.value)
    }
    const changeYear = (b)=>{
        setYear(b.target.value)
    }
    return(
        <div>
            <form onSubmit={onsubmitForm}>
                <div className={'editForms'} >
                    <input type="text" name={'model'} defaultValue={item.model} onInput={changeModel}/>
                    <input type="text" name={'price'} defaultValue={item.price} onInput={changePrice}/>
                    <input type="text" name={'year'} placeholder={item.year} onInput={changeYear}/>
                </div>
                <div>
                    <button>CONFIRM</button>
                </div>
            </form>
        </div>
    )
}