export function Address({street,suite,city,zipcode}){
    return(
        <div className='Address'>
            <h3>Address:</h3>
            <p>Street - {street}.</p>
            <p>Suite - {suite}.</p>
            <p>City - {city}.</p>
            <p>Zipcode - {zipcode}.</p>
        </div>
    )
}