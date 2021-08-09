import'./Simpsons.css'
export function Simpson({name,surname,age,info,photo}){
    return(
        <div className={'simpsons'}>
            <h2>{name} {surname}</h2>
            <h3>Вік - {age} років</h3>
            <div>{info}</div>
            <img
                src={photo}
                alt="bart"/>
        </div>
    )
}