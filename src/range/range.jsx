import React from 'react';
import './range.css'
import { Link } from 'react-router-dom';
const rooms = [
    {
        path: 'dining.png',
        text: 'Dining'
    },
    {
        path: 'living.png',
        text: 'Living'
    },
    {
        path: 'bedroom2.png',
        text: 'Bedroom'
    }
]

const roomsList = rooms.map(function (room) {
    return (
        <Link to=''>
            <img className='range_photos' src={`/photos/${room.path}`} alt={room.text} />
            <figcaption className='rooms_caption'>{room.text}</figcaption>
        </Link>
    );
});
const Range = () => {
    return (
        <section className='range_part'>
            <h2 className='range'>Browse The Range</h2>
            <p className='lorem_range'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='rooms'>{roomsList}</div>
        </section>
    )
}

export default Range