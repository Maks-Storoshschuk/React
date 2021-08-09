export default function Simpson({item:{name,surname,age,info,photo}}) {
    return(
        <div>
            {name} {surname}. Вік - {age}
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    )

}


