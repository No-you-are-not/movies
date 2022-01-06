import {Link, useLocation} from "react-router-dom";

export default function Navigation(){
    const location = useLocation();
    return(
        <div className={'navigation'}>
            <Link to={'/'}><div className={ location.pathname === '/' ? 'option selected-option' : 'option'}>Movies list</div></Link>
            <hr className={'divider'}></hr>
            <Link to={'/schedule'}><div className={location.pathname === '/schedule' ? 'option selected-option' : 'option'}>Schedule</div></Link>
        </div>
    )
}