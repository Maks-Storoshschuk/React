
export default function User({item,history}) {
    const details=()=>(
        history.push(`/users/${item.id}`)
    )

    return (
        <div>
            {item.id}. {item.name}.
            <button onClick={details}>details</button>
            {/*<Link to={{*/}
            {/*    pathname: `/users/${item.id}`,*/}
            {/*    state: {item}*/}
            {/*}}>UserDetails Api</Link>*/}
        </div>
    )
}