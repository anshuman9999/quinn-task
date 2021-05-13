import { useHistory } from "react-router"
import Icon from "./Icon"
import Star from './Star'

export const postData = {
  "requestobjects": [
    {
      "posts": {
        "operationtype": "read",
        "id": {
          "return": true
        },
        "userid": {
          "searchvalues": ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
          "return": true
        },
        "iscalendarentry": {
          "searchvalues": ["true"],
          "return": true
        },
        "media": {
          "return": true //contains image url
        },
        "rating": {
          "return": true
        },
        "text": {
          "return": true
        },
        "privacy": {
          "searchvalues": [
            18
          ],
          "return": true
        },
        "typeofday": {
          "return": true
        },

        // Don't change anything above ^^	
        //editable variables start below //

        "calendardatetime": { // Date Time of a particular post
          "return": true, // please note: there can be multiple posts on a single day
          "sort": "descending" // you can sort fetched dates by ascending/descending.
        },
        "maxitemcount": "50",   //you can ask between 1 to 50 posts (max) at a time.
        "continuationtoken": null //replace with the continuation token from response to get the next set
      }
    }
  ]
}

const Day = ({ day, fullDate, posts, bgChange }) => {

  const history = useHistory()

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
  ]

  posts.map((post, index) => {
    const calendarDateObj = new Date(post.calendardatetime)
    if (calendarDateObj.getFullYear() === fullDate.getFullYear()
      && calendarDateObj.getMonth() === fullDate.getMonth()
      && calendarDateObj.getDate() === fullDate.getDate()
    ) {
      day.match = true
      day.post = post
      day.index = index
    }
  })


  return (
    <div
      className="day"
      onClick={
        () => {
          if (!day.match) return
          history.push({
            pathname: "/show",
            state: {
              posts,
              index: day.index
            }
          })
        }
      }

      style={{
        backgroundColor: `${bgChange === 0 ? "#e2e2e2" : "#fff"}`
      }}

    >
      {
        day.format("D") === "1"
        ? <span><strong>{`${day.format("D")} ${months[day.month()]}`}</strong></span>
        : <span>{ day.format("D") }</span>
      }

      {
        day.match
          ? (
            <div className="matched-day" >
              <Star 
                size={
                  window.innerWidth >= 600
                  ? "6"
                  : "4"
                } 
                rating={day.post.rating} 
              />

              <div className="matched-day-img-div" >
                <img
                  src={day.post.media[0].mediaurl}
                  className="post-img"
                />
              </div>

              <div className="icons-day" >
                {
                  day.post.typeofday.map((type, index) => {
                    return (
                      <Icon type={type} key={index}
                        size={
                          window.innerWidth >= 600
                          ? "large"
                          : ""
                        }
                      />
                    )
                  })
                }
              </div>
            </div>
          )
          : null
      }

    </div>
  )
}

export default Day