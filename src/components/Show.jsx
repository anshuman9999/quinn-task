import React, { useEffect, useState } from 'react'
import Icon from './Icon';
import './Show.css'
import Star from './Star';
import {useHistory} from 'react-router-dom'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Show = (props) => {
    let posts = props.location.state ? props.location.state.posts : []
    let index = props.location.state ? props.location.state.index : -1

    const [indexState, setIndexState] = useState(index)
    const [post, setPost] = useState([])
    const [date, setDate] = useState()
    const [text, setText] = useState()
    const [dayType, setDayType] = useState()
    const [rating, setRating] = useState(0)

    const history = useHistory()

    useEffect(() => {
        if (posts.length) {
            const currentPost = posts[indexState]

            setPost(currentPost)

            if (currentPost.text.length >= 150) {
                setText(`${currentPost.text.substring(0, 150)}...`)
            } else {
                setText(currentPost.text)
            }

            setDayType(currentPost.typeofday)
            setRating(currentPost.rating)

            const postDateObject = new Date(currentPost.calendardatetime)
            const postDate = postDateObject.getDate()
            const postMonth = postDateObject.getMonth()

            setDate(`${postDate} ${monthNames[postMonth]}`)
        }
    }, [indexState])


    const nextHandler = () => {
        if (indexState === posts.length - 1) {
            setIndexState(0)
        } else {
            setIndexState(prevIndex => prevIndex + 1)
        }

    }

    const previousHandler = () => {
        if (indexState === 0) {
            setIndexState(posts.length - 1)
        } else {
            setIndexState(prevIndex => prevIndex - 1)
        }

    }

    return (
        <>
            {
                post ?
                    (
                        <div className="show-overlay" >
                            <div
                                className="prev-btn-div"
                            >
                                <span
                                    className="prev-btn"
                                    onClick={
                                        () => previousHandler()
                                    }
                                ><i className="fas fa-arrow-left"></i></span>
                            </div>

                            <div className="main-img-wrapper" >
                                <div className="main-image-div" >
                                    <img src={posts[indexState].media[0].mediaurl} className="image-div-image" alt="show-img" ></img>
                                </div>

                                <div className="main-content-div" >
                                    <div className="icons-div" >
                                        <div className="icons" >
                                            {
                                                dayType ?
                                                    dayType.map((day, index) => {
                                                        return (
                                                            <Icon
                                                                type={day}
                                                                size="large"
                                                                key={index}
                                                                className="icon-style-show"
                                                            />
                                                        )
                                                    })
                                                    : null
                                            }
                                        </div>

                                        <div className="star-rating" >
                                            {
                                                rating ?
                                                    <Star
                                                        size={12}
                                                        rating={rating}
                                                        className="stars"
                                                    />
                                                    : null
                                            }
                                        </div>

                                    </div>

                                    <div className="content-div" >
                                        <div className="date-div" >
                                            <span className="date-span" >{date}</span>
                                        </div>

                                        <div className="text-div" >
                                            <span className="text-span" >{text}</span>
                                        </div>
                                        
                                    </div>
                                    <div className="show-post-div" >
                                        <div className="h-bar" ></div>
                                        <div className="view-post-div" >
                                            <span className="view-post-span" >View Full Post</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div
                                className="next-btn-div"
                            >
                                <span
                                    onClick={() => {
                                        history.push({
                                            pathname: "/"
                                        })
                                    }}

                                    className="close-btn"
                                >
                                    <i className="fas fa-times"></i>
                                </span>

                                <span
                                    className="next-btn"
                                    onClick={
                                        () => nextHandler()
                                    }
                                ><i className="fas fa-arrow-right"></i></span>
                            </div>

                        </div>
                    ) : null
            }
        </>
    )
}

export default Show
