import React, { useState } from 'react';
import './products.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/todo/selectedProducts';
import { addProductToCompare } from '../features/compare/compare';

const ProductList = ({ products, index }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return products.slice(0, index).map((product) => {
        const handleClick = () => {
            const newPath = `/products/${product.name}`;
            navigate(newPath);
        };
        const addProductHandler = () => {
            const productInf = {
                id: product.id,
                quantity: 1
            }
            dispatch(addProduct(productInf))
        }

        const addCompareProductHandler = () => {
            dispatch(addProductToCompare(product.id))
        }
        return (
            <div key={product.id} className='product_item' onClick={handleClick}>
                <div className='item_hoover_state'>
                    <button type='button' onClick={() => addProductHandler()} className='item_button'>Add to cart</button>
                    <div className='product_link_items'>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/1.svg`} alt='share' />
                            <figcaption className='product_link_item_text'>Share</figcaption>
                        </button>
                        <button type='button' onClick={addCompareProductHandler} className='product_link_item'>
                            <img src={`/photos/products/2.svg`} alt='compare' />
                            <figcaption className='product_link_item_text'>Compare</figcaption>
                        </button>
                        <button type='button' className='product_link_item'>
                            <img src={`/photos/products/3.svg`} alt='like' />
                            <figcaption className='product_link_item_text'>Like</figcaption>
                        </button>
                    </div>
                </div>
                <Link to={`/products/${product.name}`} className='product_link'>
                    <img src={`/photos/products/${product.path}`} alt={product.name} />
                    {product.discount && <div className='item_circle item_discount'>{product.discount}</div>}
                    {product.new && <div className='item_circle item_new'>New</div>}
                    <div className='item_text'>
                        <h3 className='item_name'>{product.name}</h3>
                        <p className='item_type'>{product.type}</p>
                        <div className='item_cost'>
                            <p className='current_cost'>Rp {product.cost.toLocaleString('en-US')}</p>
                            {product.oldCost && <p className='old_cost'> Rp {product.oldCost}</p>}
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
}


const Products = ({ title }) => {
    const [showMore, setShowMore] = useState(true);
    const productsList = useSelector((state) => state.productList.products)
    return (
        <section className='products_section'>
            <h2 className={title === 'Related Products' ? 'products_header_single' : 'products_header'}>{title}</h2>
            <div className='products'>
                {<ProductList products={productsList} index={showMore ? 8 : 4} />}
            </div>
            <div><button type='button' className={title === 'Related Products' ? 'show_more_single' : 'show_more'} onClick={() => { setShowMore(!showMore) }}>Show {showMore ? 'Less' : 'More'}</button></div>
        </section>

    )
}

export default Products