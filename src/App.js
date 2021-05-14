import React from "react";
import Calendar from './components/Calendar';
import { Route } from 'react-router-dom'
// import ShowDup from "./components/ShowDup";
import Show from "./components/Show";

const App = () => {
  return (
    <>
      <Route path="/" exact component={Calendar} />
      <Route path="/show" exact component={Show} />
    </>
  )
}

export default App;
