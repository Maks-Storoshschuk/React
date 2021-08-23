import {BrowserRouter as Router, Link} from "react-router-dom";

export default function Post({item,history}) {
    const details=()=>(
        history.push(`/users/${item.id}`)
    )

    return (
        <div>
            {item.id}. {item.title}.
            <Link to={{
                pathname: `/posts/${item.id}`,
                state: {item}
            }}>Post Detail History</Link>
        </div>
    )
}