import React from 'react';
import './shop_header.css'
import { Link } from 'react-router-dom';

const ShopHeader = () => {
    return (
        <div>
            <img width='1440' height='330' className='shop_header_back' src='/photos/shop_header_background.png' alt='header back' />
            <div className='shop_header_text'>
                <h2 className='shop_header_header'>Shop</h2>
                <div className='shop_header_text_inner'>
                    <Link to='/home' className='shop_header_link'>Home</Link>
                    <img width='20' height='20' src='/photos/shop_header_arrow.svg' alt='arrow' />
                    <Link to='/shop' className='shop_header_link'>Shop</Link>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader