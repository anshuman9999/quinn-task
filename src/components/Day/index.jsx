import { useHistory } from "react-router"
import Icon from "../Icon"
import Star from '../Star'
import { months } from '../../data'

const Day = ({ day, fullDate, posts, bgChange }) => {

  const history = useHistory()

  posts.forEach((post, index) => {
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
      className={
        !day.match
        ? "day"
        : "day post-day"
      }
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
        backgroundColor: `${bgChange === 0 ? "#e1e1e1" : "#fff"}`
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
                  alt="post-img"
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