import React from "react";
import Calendar from './components/Calendar';
import Show from './components/Show'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Route path="/" exact component={Calendar} />
      <Route path="/show" exact component={Show} />
    </>
  )
}

export default App;
