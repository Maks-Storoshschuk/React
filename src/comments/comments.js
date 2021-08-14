
export function Comments({item,choose}) {
    return (
        <div>

            <button onClick={() => {
                choose(
                    <div>
                        <h4>{item.body}</h4>
                    </div>
                )
            }}><i>
                {item.name}
            </i>
            </button>
        </div>

    )
}