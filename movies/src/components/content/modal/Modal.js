import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";



export default function Modal({open, movie, setOpenModal, occupied}){
    let user = useSelector((state) => state.user)
    let [selected, setSelected] = useState([])
    let [ischeckout, setCheckout] = useState(false)
    function setSelectedSeats(index){
        if (selected.includes(index)){
            setSelected([ ...selected.filter((item) => item !== index)])
        }
        else {
            setSelected([ ...selected, index])
        }
    }
    function closeModal(){
        setOpenModal(false);
        setSelected([])
    }
    function checkout(){
        setCheckout(true)
    }
    function checkoutSetters(){
        setSelected([])
        setCheckout(false);
        setOpenModal(false);
    }
    if (ischeckout && selected.length < 1){
        return ReactDom.createPortal(
            <>
                <div className={'overlay'}/>
                <div className={'checkout-container'}>
                    <div>Please select any seats</div>
                    <div><button onClick={checkoutSetters} className={'checkout-btn'}>OK</button></div>
                </div>
            </>,
            document.getElementById('portal')
        )
    }
    if (ischeckout){
        return ReactDom.createPortal(
            <>
                <div className={'overlay'}/>
                <div className={'checkout-container'}>
                    <button className={'modal-close-btn'} onClick={checkoutSetters}>X</button>
                    <div>
                        <p>Thank you for the purchase!</p>
                        <p>Tickets were send to your email {user[1]}</p>
                    </div>
                    <div><Link to={'/'}><button className={'checkout-btn'}>Go to main page</button></Link></div>
                </div>
            </>,
            document.getElementById('portal')
        )
    }
    let ids =[]
    for (let i = 1; i < 49; i++){
        ids.push(i);
    }
    let seats = ids.map((seat, index) => {
        return <div onClick={() => setSelectedSeats(index)} key={index} className={selected.includes(index) ? 'modal-seat selected' : occupied.includes(index) ? 'modal-seat occupied' : 'modal-seat'}>{index}</div>
    });
    if (!open) return null;
    return ReactDom.createPortal(
        <>
        <div className={'overlay'}/>
        <div className={'modal-container'}>
            <button onClick={closeModal} className={'modal-close-btn'}>X</button>
            <section className={'modal-movie-info'}>
            <div><b>Movie: </b>{movie.movie.title}</div>
            <div><b>Date: </b>{new Date(movie.date).toLocaleDateString()}</div>
            <div><b>Time: </b>{new Date(movie.date).toLocaleTimeString().substr(0, 5)}</div>
            <div><b>Room: </b>{movie.room.id} {movie.room.label}</div>
            </section>
            <div className={'select-seats'}><b>Select seats:</b></div>
            <div className="seats-types">
                <div><div className="seat-example"></div>- Free</div>
                <div><div className="seat-example occupied"></div>- Occupied</div>
                <div><div className="seat-example selected"></div>- Selected</div>
            </div>
            <section className={'modal-seats'}>
                {seats}
            </section>
            <div><b>Selected seats:</b> {selected.join(', ')}</div>
            <button onClick={checkout} className={'checkout-btn'}>Checkout</button>
        </div>
        </>,
        document.getElementById('portal')
    )
}