import React, {useEffect} from 'react';
import Content from "./components/Content";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {useDispatch} from "react-redux";
import {getMovies, getSchedule} from "./redux/actions";
import FirstModal from "./components/FirstModal";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getSchedule());
  })
  return (
    <>
     <FirstModal/>
    <Header/>
    <Navigation/>
    <Content/>
    </>
  );
}

export default App;
