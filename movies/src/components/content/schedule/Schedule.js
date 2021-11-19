import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ScheduleTable from "./ScheduleTable";


export default function Schedule(){
    let schedule = useSelector((state) => state.schedule)
    let [date, setDate] = useState('');
    let [sideDate, setSideDate] = useState('')
    function fillDate(event){
        setSideDate(event.target.value)
        let dateInner = new Date(event.target.value);
        setDate(`${dateInner.getDate()}`)
    }
    let correctSessions = [];
    for (let item of schedule){
        let dateItem = new Date(item.date)
        if (dateItem.getDate() == date){
            correctSessions.push(item);
        }
    }
    if (!date){
        return (
            <div>
                <input value={sideDate} onChange={fillDate} type={'date'} className={'date-select'}/>
                <div className={'no-sessions-title'}>Select date to see available movies</div>
            </div>
        )
    }
    if (correctSessions.length < 1){
        return (
            <div>
                <input value={sideDate} onChange={fillDate} type={'date'} className={'date-select'}/>
               <div className={'no-sessions-title'}> There are no movies for chosen date, try to choose another date.</div>
            </div>
        )
    }
    return(
      <>
          <input value={sideDate} onChange={fillDate} type={'date'} className={'date-select'}/>
          <div className={'schedule-container'}>
              <ScheduleTable data={correctSessions}/>
          </div>
      </>
    )
}