import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function MovieInfo(){
    let {id} = useParams();
    let movies = useSelector((state) => state.movies)
    let movie = movies.filter((movie) => movie.id === +id)[0]
    return(
        <>
            <Link to={'/'}><button className={'back-btn'}>Back</button></Link>
            <div className={'full-info'}>
                <h1 className={'full-title'}>{movie.title}</h1>
                <section className={'description'}>
                    <img className={'full-img'} src={movie.poster}/>
                    <ul>
                        <li><b>Actors: </b> {movie.actors.join(', ')}</li>
                        <li><b>Genres:  </b>{movie.genre.join(", ")}</li>
                        <li><b>Country:  </b>{movie.country.join(", ")}</li>
                        <li><b>Language:  </b>{movie.language}</li>
                        <li><b>Age:  </b>{movie.age}</li>
                        <li><b>Description:  </b>{movie.description}</li>
                    </ul>
                </section>
                <h2 className={'trailer-title'}>Watch trailer:</h2>
                <iframe className={'movie-trailer'} src={movie.trailer}></iframe>
            </div>
        </>
    )
}