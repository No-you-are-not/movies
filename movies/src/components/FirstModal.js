import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {useDispatch} from "react-redux";
import {setUser} from "../redux/actions";

export default function FirstModal(){
    let [userModal, setUserModal] = useState(true)
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let dispatch = useDispatch();
    function usernameF(event){
        setUsername(event.target.value);
    }
    function emailF(event){
        setEmail(event.target.value);
    }
    function submitForm(){
        let user = [username, email]
        dispatch(setUser(user))
        setUserModal(false)
    }
    if (!userModal) return null;
    return ReactDom.createPortal(
        <>
            <div className={'overlay'}/>
            <div className={'user-info-modal'}>
                <div className={'user-modal-title'}>Please, fill in the fields down below</div>
                <div><input placeholder={'Enter your username...'} required value={username} onChange={usernameF}/></div>
                <div><input placeholder={'Enter your email...'} required value={email} onChange={emailF}/></div>
                <div className={'user-modal-btn'}><button onClick={submitForm}>Submit</button></div>
            </div>
        </>,
        document.getElementById('user-info')
    )
}
