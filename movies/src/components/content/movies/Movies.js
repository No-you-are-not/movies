import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

export default function Movies(){
    let movies = useSelector((state) => state.movies)
    let schedule = useSelector((state) => state.schedule)

    let genres = ["все жанры"]
    for (let item of movies){
        for (let genre of item.genre){
            if (genres.includes(genre)){
                continue;
            }
            else {
                genres.push(genre)
            }
        }
    }
    let options = genres.map((genre) => (
        <option value={genre}>{genre}</option>
    ))

    let [select, setSelect] = useState('все жанры');
    function fillSelect(event){
        setSelect(event.target.value);
    }

    let [search, setSearch] = useState('');
    function fillSearch(event){
        setSearch(event.target.value)
    }
    function clearSearch(){
        setSearch('')
    }


    let inStock = [];
    for (let item of schedule){
        if (inStock.includes(item.movie.id)){
            continue;
        }
        else {
            inStock.push(item.movie.id)
        }
    }
    let moviesin;
    if (search && select !== 'все жанры'){
        moviesin = movies.filter((movie) => inStock.includes(movie.id) && movie.title.toLowerCase().includes(search.toLowerCase()) && movie.genre.includes(select))
    }
    else if (select !== 'все жанры'){
        moviesin = movies.filter((movie) => inStock.includes(movie.id) && movie.genre.includes(select))
    }
    else if (search){
        moviesin = movies.filter((movie) => inStock.includes(movie.id) && movie.title.toLowerCase().includes(search.toLowerCase()))
    }
    else{
        moviesin = movies.filter((movie) => inStock.includes(movie.id))
    }
    if (!moviesin){
        return (
            <div>There are no movies yet :(</div>
        )
    }

    return(
        <>
            <div className={'choices'}>
                <div className={'movie-search'}>
                    <input value={search} placeholder={'Search for movie...'} onChange={fillSearch} className={'input-search'} />
                    <button onClick={clearSearch} className={'btn-search'}>Clear</button>
                </div>
                <select onChange={fillSelect} className={'movie-select'}>
                    {options}
                </select>
            </div>
            <div className={'movies-container'}>
                {moviesin.map((movie) => <Link to={`/movie/${movie.id}`}><MovieCard movie={movie}/></Link>)}
            </div>
        </>
    )
}