import React from 'react';
import './product_path.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { selectAllProductList } from '../store/selectors';
import { useSelector } from 'react-redux';

const ProductPath = () => {
    const { productId } = useParams();
    const currentProduct = useSelector(selectAllProductList).filter(product => { return product.id === productId })[0]
    if(currentProduct){
      return (
        <section className='product_path_section'>
            <Link to='/home' className='nav_link nav_link_home'>Home</Link>
            <img src='/photos/arrow.png' alt='arrow' />
            <Link to='/shop' className='nav_link nav_link_shop'>Shop</Link>
            <img src='/photos/arrow.png' alt='arrow' />
            <p className='product_name'>{currentProduct.name}</p>
        </section>
    )  
    }
    
}
export default ProductPath