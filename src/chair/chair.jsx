import React from 'react';
import './chair.css'

const Chair = () => {
    return (
        <header  className='header'>
            <img className='background' src='/photos/chair.png' alt='chair' width='1440' height='719' />
            <div className='pink_square'>
                <h2 className='arial' data-testid="chair">New Arrival</h2>
                <h3 className='discover'>Discover Our New Collection</h3>
                <p className='square_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button type='button' className='buy_now'><span className='buy_now_text'>BUY Now</span></button>
            </div>
        </header>
    )
}

export default Chair