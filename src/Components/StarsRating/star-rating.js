import React, { useState } from 'react'
import {Rating} from "react-simple-star-rating";
export default function Stars(item) {

    const [rating, setRating] = useState((item.item)/2) // initial rating value

    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <div className='App'>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
    )
}
