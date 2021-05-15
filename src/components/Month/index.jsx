import React, { useEffect } from "react";
import MonthGrid from '../MonthGrid';
import { months } from '../../data';
import "./Month.css"

export const MonthName = ({ date }) => {

  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div
      style={{
        fontSize: "1.5rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        fontWeight: "bold"
      }}
    >
      {`${months[month]} ${year}`}
    </div>
  )
};


const Month = ({ date, top }) => {

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