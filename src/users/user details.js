export default function UserDetails(props){
    const {item} = props.location.state
    console.log(item)
    return(
        <div>
            {item.name}
        </div>
    )
}