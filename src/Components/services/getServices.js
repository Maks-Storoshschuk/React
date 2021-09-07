import axios from "axios";
import {pushGenres, pushGenresMovies, pushInfo, pushMovies} from "../../index";


const config = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjdlMzVjMWNjNWMwZDE2YjYwMjE3M2NiMDhjNzU5YyIsInN1Yi' +
            'I6IjYxMmY0YTM2ZmJlMzZmMDA0MzQyY2UzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EuKtgdRq7Zl8wxRTrH' +
            'xm3XvOpLGAIdtG51YIuTNeYc',
    }
};

const myAxios = axios.create(config);

const getServices = () => async (dispatch) => {
    const response = await myAxios.get('/genre/movie/list');
    dispatch(pushGenres(response.data.genres))
}

const getMovies = (page) => async (dispatch) => {
    const response = await myAxios.get(`/discover/movie?page=${page}`);
    dispatch(pushMovies(response.data.results))
}

const getInfo = (id) => async (dispatch) => {
    const response = await myAxios.get(`/movie/${id}`);
    dispatch(pushInfo(response.data))
}

const getGenresMovies = (item,page) => async (dispatch) => {
    const response = await myAxios.get(`/discover/movie?with_genres=${item}&page=${page}`);
    dispatch(pushGenresMovies(response.data.results))
}

export {getInfo,getGenresMovies,getMovies,getServices}
