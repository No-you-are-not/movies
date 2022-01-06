import React, {useState} from 'react';
import Modal from "../modal/Modal";


export default function ScheduleTable({data}){
    let occupied = [];
    let occupiedSeatsNumber = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < occupiedSeatsNumber; i++){
        occupied.push(Math.floor(Math.random() * 50) + 1)
    }
    let [openModal, setOpenModal] = useState(false)
    let [movieModal, setMovieModal] = useState({})
    function modalData(index){
        setOpenModal(true);
        setMovieModal(data[index]);
    }
    let tableRows = data.map((movie, index) => (
        <>
        <tr key={movie.id}>
            <td>{movie.movie.title}</td>
            <td>{movie.room.id} {movie.room.label}</td>
            <td>{new Date(movie.date).toLocaleTimeString().substr(0,5)}</td>
            <td className={"btn-cell"}><button onClick={() => modalData(index)} className={'select-btn'}>select</button></td>
        </tr>
        </>
    ))
    return(
        <>
            <Modal open={openModal} movie={movieModal} setOpenModal={setOpenModal} occupied={occupied}/>
            <table className={'schedule-table'}>
                <thead>
                <tr>
                    <th>Movie name</th>
                    <th>Room</th>
                    <th>Time</th>
                    <th>Select</th>
                </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        </>
    )
}