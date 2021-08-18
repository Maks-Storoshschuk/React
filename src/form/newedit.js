import {useState} from "react";
export default function EditForm({item,refreshCar}){
    let [model,setModel] = useState([])
    let [price,setPrice] = useState([])
    let [year,setYear] = useState([])
    let onsubmitForm = (b)=>{
        b.preventDefault()
    }
    const changeModel = (b)=>{
        setModel(b.target.value)
    }
    const changePrice = (b)=>{
        setPrice(b.target.value)
    }
    const changeYear = (b)=>{
        setYear(b.target.value)
    }
    let ref=()=>{
        refreshCar({model:model,price:price,year:year,id:item.id})
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
                    <button
                    onClick={ref}>CONFIRM</button>
                </div>
            </form>
        </div>
    )
}