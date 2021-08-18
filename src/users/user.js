export default function User({item}){
    return(
        <div>
            <h2>{item.id} {item.name} {}</h2>
            <h3>{item.username}. {item.email}</h3>
        </div>
    )
}