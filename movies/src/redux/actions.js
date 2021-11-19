

import {GET_MOVIES, GET_SCHEDULE, SET_USER} from "./constants";

export function getMovies(){
    return async dispatch => {
        const response = await fetch('https://trevadim.github.io/data/movies.json');
        const json = await response.json()
        dispatch({type: GET_MOVIES, item: json})
    }
}

export function getSchedule(){
    return async dispatch => {
        const response = await fetch('https://trevadim.github.io/data/schedule.json');
        const json = await response.json()
        dispatch({type: GET_SCHEDULE, item: json})
    }
}

export const setUser = (data) => ({
    type:SET_USER,
    user:data
})