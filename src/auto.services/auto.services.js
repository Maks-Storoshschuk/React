let api ='195.72.146.25'
function getAuto(){
    return (
        fetch(`http://${api}/api/v1/cars`)
            .then(value => value.json())
    )
}
export {getAuto}