import {GET_MOVIES, GET_SCHEDULE, SET_USER} from "./constants";


let initialState = {
    movies:[],
    schedule:[],
    user:[],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_MOVIES:
            return { ...state, movies: action.item.movies}
        case GET_SCHEDULE:
            return { ...state, schedule: action.item.sessions}
        case SET_USER:
            return { ...state, user: action.user}
        default:
            return state
    }
}