import React, { useEffect, useState } from 'react'

const Star = (props) => {
    const [rating, setRating] = useState(null)

    useEffect(() => {
        if (props.rating) {
            setRating(props.rating)
        }
    }, [props.rating])

    return (
        <div className={props.className} >
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1

                return (
                    <React.Fragment key={index}>
                        {
                            rating ?
                                (
                                    <label>
                                        <input
                                            style={{ display: "none" }}
                                            type="radio"
                                            name="rating"
                                            value={rating}
                                        />
                                        <i className="fas fa-star"
                                            style={{ color: ratingValue <= rating ? "#96c5dd" : "#e4e5e9", fontSize: `${props.size / 10}rem` }}
                                        ></i>
                                    </label>
                                )
                                : null
                        }

                    </React.Fragment>
                )
            })}

        </div>
    )
}

export default Star
