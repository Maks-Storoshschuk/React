
export default function Car({item}){
    return(
        <div className={'d-flex'}>
            <img src="https://png.pngtree.com/png-vector/20190510/ourlarge/pngtree-vector-car-icon-png-image_1028600.jpg" alt="img"/>
            <h2>{item.id}. Модель автомобіля: {item.model}. Ціна: {item.price}. Рік випуску: {item.year}.</h2>
        </div>
    )
}