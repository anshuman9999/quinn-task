import React from "react";
import MonthGrid from './MonthGrid';
import { MonthNames } from '../data';
import "./Month.css"

export const MonthName = ({ date }) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div
      style={{
        fontSize: "1.2rem",
        marginTop: "1rem",
        marginBottom: "1rem"
      }}
    >
      {`${MonthNames[month]} ${year}`}
    </div>
  )
};


const Month = ({ date, top }) => {

  // useEffect(() => {
  //   console.log("month loaded")
  // }, [top])

  return (
    <div
      className="month-div"
      style={{ transform: `translateY(${top})` }}
    >
      <MonthName date={date} />
      <MonthGrid date={date} top={top} />
    </div>
  );
};

export default Month;