import React from 'react';
import './product_path.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductPath = () => {
    const { productName } = useParams();
    return (
        <section className='product_path_section'>
            <Link to='/home' className='nav_link nav_link_home'>Home</Link>
            <img src='/photos/arrow.png' alt='arrow' />
            <Link to='/shop' className='nav_link nav_link_shop'>Shop</Link>
            <img src='/photos/arrow.png' alt='arrow' />
            <p className='product_name'>{productName}</p>
        </section>
    )
}
export default ProductPath