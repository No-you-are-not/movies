import React from 'react';

export default function MovieCard({movie}){
    let genres = movie.genre.join(", ")
    return(
        <div key={movie.id} className={'movie-card'}>
            <h2 className={'movie-title'}>{movie.title}</h2>
            <img alt={'movie poster'} className={'movie-img'} src={movie.poster}/>
            <div>Genres: {genres}</div>
        </div>
    )
}