const saveAuto = ({model,price,year})=>{
    fetch('http://192.168.1.253/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model,price,year}),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
        .then(value => value.json())
        .then((json) => console.log("збережено", json))
}
function getAuto(){
    return (
        fetch('http://192.168.1.253/api/v1/cars')
            .then(value => value.json())
    )
}
function delAuto({id}){
    return (
        fetch(`http://192.168.1.253/api/v1/cars/${id}`, {
                method:'DELETE'
            })
            .then(value => value.json())
    )
}
function editauto({model,price,year,id}){
    return (
        fetch(`http://192.168.1.253/api/v1/cars/${id}`, {
            method:'PUT',
            body: JSON.stringify({model,price,year}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(value => value.json())
    )

}
// let getAuto =()=>{
//     fetch('http://195.72.146.25/api/v1/cars')
//         .then(value => value.json())
//         .then((value)=>console.log(value))
//
// }
export {saveAuto,getAuto,delAuto,editauto}