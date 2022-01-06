import React from 'react';
import Movies from "./content/movies/Movies";
import {Route, Routes} from "react-router-dom";
import Schedule from "./content/schedule/Schedule";
import MovieInfo from "./content/movies/MovieInfo";

export default function Content(){
    return(
        <div className={'main-content'}>
            <Routes>
                <Route exact path={'/'} element={<Movies/>}></Route>
                <Route path={'/schedule'} element={<Schedule/>}></Route>
                <Route path={'/movie/:id'} element={<MovieInfo/>}></Route>
            </Routes>
        </div>
    )
}