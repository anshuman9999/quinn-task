import React, { useEffect, useState } from "react";
import axios from 'axios'
import Day, { postData } from './Day'
import moment from "moment"
import "./styles.css"

function MonthGrid({ date }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getResponse() {
      const response = await axios.post(
        "http://devapi.quinn.care/graph",
        postData
      )
      
      console.log("in")
      setPosts(response.data.responseobjects[0].posts)
    }

    getResponse()
  }, [])

  const year = date.getFullYear()
  const month = date.getMonth()

  const value = moment([year, month])
  const daysInMonth = value.daysInMonth()

  const tempDate = new Date(`${year}`, `${month}`, `${daysInMonth}`)
  const lastDate = moment(tempDate)
  // console.log(lastDate)

  const calendar = []

  const startDay = value.clone().startOf("month").startOf("week")
  const endDay = value.clone().endOf("month").endOf("week")
  // const endDay = lastDate
  // console.log([startDay, endDay])
  const day = startDay.clone().subtract(1, "day")

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    )
  }

  return (
    <div className="calendar">
      {
        calendar.map((week, index) => {
          return <div key={index} className="week" style={{ height: `calc(100% / 5)` }} >
            {
              week.map((day, index) => {
                return (
                  <Day
                    key={index}
                    day={day}
                    fullDate={day._d}
                    posts={posts}
                    bgChange={index}
                  />
                )
              })
            }
          </div>
        })
      }
    </div>
  )

}

export default MonthGrid;