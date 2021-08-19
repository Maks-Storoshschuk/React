let api ='195.72.146.25'
const saveAuto = ({model,price,year})=>{
    return(
        fetch(`http://${api}/api/v1/cars`, {
            method: 'POST',
            body: JSON.stringify({model,price,year}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        })

    )


}
function getAuto(){
    return (
        fetch(`http://${api}/api/v1/cars`)
            .then(value => value.json())
    )
}
function delAuto(id){
    return (
        fetch(`http://${api}/api/v1/cars/${id}`, {
                method:'DELETE'
            })
    )
}
function editauto({model,price,year,id}){
    return (
        fetch(`http://${api}/api/v1/cars/${id}`, {
            method:'PUT',
            body: JSON.stringify({model,price,year}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(value => value.json())
            .then((json) => {
        if(json.model === model)
            console.log('Зміни збережено!')
        else (console.log('Помилка'))
    })
    )

}
export {saveAuto,getAuto,delAuto,editauto}