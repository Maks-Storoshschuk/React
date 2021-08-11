import Geo from "../geo/Geo";

export default function Address({address:{street,city,suite,zipcode,geo}}){
    return(
        <div>
            <p>
                {city} {street} {suite}
                {zipcode}
            </p>
                <Geo
                    geo = {geo}
                />



        </div>
    )
}