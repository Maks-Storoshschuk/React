import axios from "axios";
import {pushGenresMovies} from "../../index";

const config = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdlMzVjMWNjNWMwZDE2YjYwMjE3M2NiMDhjNzU5YyIsInN1Yi' +
            'I6IjYxMmY0YTM2ZmJlMzZmMDA0MzQyY2UzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EuKtgdRq7Zl8wxRTrH' +
            'xm3XvOpLGAIdtG51YIuTNeYc',
    }
};

const myAxios = axios.create(config);

const getGenresMovies = () => async (dispatch) => {
    const response = await myAxios.get(`/discover/movie?with_genres=18`);
    dispatch(pushGenresMovies(response.data.results))
}

export {getGenresMovies};

