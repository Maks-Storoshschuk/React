export default function Car({item}){
    return(
        <div>
            <h2>{item.id}. Модель автомобіля: {item.model}. Ціна: {item.price}. Рік випуску: {item.year}.</h2>
        </div>

    )
}