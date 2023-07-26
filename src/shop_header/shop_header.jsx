import React from 'react';
import './shop_header.css'
import { Link } from 'react-router-dom';

const ShopHeader = ({ logo, path }) => {
    return (
        <div>
            <img width='1440' height='330' className='shop_header_back' src='/photos/shop_header_background.png' alt='header back' />
            <div className='shop_header_text'>
                {logo && <img width='77' height='77' className={path === 'Blog'||path === 'Cart' ? 'shop_header_icon_blog' : 'shop_header_icon'} src='/photos/header_back_phot_icon.png' alt='header icon' />}
                <h2 className='shop_header_header'>
                    {path}
                </h2>
                <div className='shop_header_text_inner'>
                    <Link to='/home' className='shop_header_link home_header_link'>Home</Link>
                    <img width='20' height='20' src='/photos/shop_header_arrow.svg' alt='arrow' />
                    <Link to={`/${path}`} className='shop_header_link dynamic_header_link'>{path}</Link>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader