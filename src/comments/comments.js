
export function Comments({item,choose}){
    return(
        <div>
            <i>
                {item.name}
            </i>
            <button onClick={()=>{choose(
                <div>
                    <h4>{item.body}</h4>
                </div>
            )}}>read</button>
        </div>

    )
}