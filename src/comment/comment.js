export default function Comment({item,choose}){
    return <div>
        <i>{item.name}</i>
        <button onClick={()=> {choose (item.body) }}>info</button>

    </div>
}