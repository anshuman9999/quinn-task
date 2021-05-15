import React, { useEffect, useRef, useState } from "react";
import { returnNthMonth, returnNextMonth, returnPreviousMonth } from '../../utils';
import Weeks from '../Weeks';
import Month, { MonthName } from '../Month';
const MONTH_HEIGHT = (window.innerWidth >= 600) ? 1000 : 900;
const HEIGHT = 1000000;

const Calendar = () => {

  const [index, setIndex] = useState(0)
  const ref = useRef()
  const halfMark = useRef(0)

  useEffect(() => {
    const { current } = ref;
    current.scrollTop = (current.scrollHeight - current.clientHeight) / 2;

    console.log("scroll height: ", current.scrollHeight)
    console.log("client height: ", current.clientHeight)
    console.log("scroll top: ", current.scrollTop)

    halfMark.current = (current.scrollHeight / 2) / MONTH_HEIGHT;
    console.log("half mark: ", halfMark.current)
  }, [])

  const handleScroll = e => {
    const target = e.target;
    const top = target.scrollTop

    console.log("half mark: ", halfMark.current)
    console.log("in handleScroll- scroll top: ", target.scrollTop)
    console.log("in handleScroll- clientHeight: ", target.clientHeight)
    console.log("in handleScroll- top: ", top)

    const month = Math.floor(top / MONTH_HEIGHT);

    console.log("month: ", month)

    if (month !== index) {
      setIndex(month - halfMark.current)
    }
  };

  const date = new Date(2020, 9, 17);
  const indexedDate = returnNthMonth(date, index)

  return (
    <>

      <Weeks />
      <MonthName date={indexedDate} />
      <div className="calendar-app"
      >
        <div ref={ref} onScroll={(e) => {handleScroll(e)}}
          className="months-container"
        >
          <div style={{ height: HEIGHT + 'px', position: "relative" }}>
            <Month
              top={`${(index + halfMark.current - 1) * MONTH_HEIGHT}px`}
              date={returnPreviousMonth(indexedDate)}
            />
            <Month
              top={`${(index + halfMark.current) * MONTH_HEIGHT}px`}
              date={indexedDate}
            />
            <Month
              top={`${(index + 1 + halfMark.current) * MONTH_HEIGHT}px`}
              date={returnNextMonth(indexedDate)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;