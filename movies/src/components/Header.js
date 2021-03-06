import React from 'react';
import {useSelector} from "react-redux";


export default function Header(){
    let user = useSelector((state) => state.user)
    return(
        <div className={'header'}>
            <div className={'title'}>✧･ﾟ: *✧･ﾟ:* Best movies storage *:･ﾟ✧*:･ﾟ✧</div>
            <div className={'user-info'}>
                <img alt={'user logo'} className={'user-img'} src={"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"}/>
                <div className={'user-name'}>{user[0] ? user[0] : 'user'}</div>
            </div>
        </div>
    )
}