export default function Post({item}){
    return(
        <div>
            <h2>{item.id}. {item.title}</h2>
            <i>{item.body}</i>
        </div>
    )
}