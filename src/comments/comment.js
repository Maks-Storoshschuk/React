export default function Comment({item}){
    return(
        <div>
            <h2>{item.id}. {item.name}</h2>
            <i>{item.body}</i>
        </div>
    )
}