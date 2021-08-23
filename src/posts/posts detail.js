export default function PostDetails(props){
    const {item} = props.location.state
    console.log(item)
    return(
        <div className={'PostInfo'}>
            {item.name}
            {item.body}
        </div>
    )
}