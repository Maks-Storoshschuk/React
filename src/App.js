import Movie from "./Components/MoviesList/movies";
import {test} from "./Components/services/getMovie";
import {useSelector} from "react-redux";


const App = () => {

    return (
        <div>
            <Movie/>
        </div>
    )
}

export default App;