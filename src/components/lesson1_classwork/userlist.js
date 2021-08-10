export function UserList({id,name,username,email,phone,website}){
    return(
        <div className='userlist'>
            <h2> {id} {name}.</h2>
            <h3> Username - {username}.</h3>
            <p> email: {email}. Phone - {phone}. Website - {website}</p>

        </div>

    )
}



