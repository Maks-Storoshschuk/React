import Address from "../address/Address";

export default function User({item}){
    let {address}= item
    return(
        <div>
            <h2>{item.id} {item.name} {}</h2>
            <h3>{item.username}. {item.email}</h3>
            <Address
            address = {address}
            />
        </div>
    )
}