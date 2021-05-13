import React from "react";

const Weeks = () => {
  const weeks = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="weeks-div">
      {weeks.map((week, index) => (
        <div key={index} className="week-i" >{week}</div>
      ))}
    </div>
  );
};


export default Weeks;