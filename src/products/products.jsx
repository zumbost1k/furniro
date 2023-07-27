import React, { useState } from 'react';
import './products.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { addProduct } from '../features/todo/todoSlice';


const productHooverItems = [
    {
        path: '1.svg',
        text: 'Share',
    },
    {
        path: '2.svg',
        text: 'Compare',
    },
    {
        path: '3.svg',
        text: 'Like',
    },
]

const productHooverItemsList = productHooverItems.map(item => {
    return (
        <Link to='' className='product_link_item'>
            <img src={`/photos/products/${item.path}`} alt={item.text} />
            <p to='' className='product_link_item_text'>{item.text}</p>
        </Link>
    )
})

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
                id: v4(),
                info: product,
                number: 1
            }
            dispatch(addProduct(productInf))
        }
        return (
            <div className='product_item' onClick={handleClick}>
                <div className='item_hoover_state'>
                    <button onClick={() => addProductHandler()} className='item_button'>Add to cart</button>
                    <div className='product_link_items'>{productHooverItemsList}</div>
                </div>
                <Link to={`/products/${product.name}`} className='product_link'>
                    <img src={`/photos/products/${product.path}`} alt={product.name} />
                    {product.discount && <div className='item_circle item_discount'>{product.discount}</div>}
                    {product.new && <div className='item_circle item_new'>New</div>}
                    <div className='item_text'>
                        <h3 className='item_name'>{product.name}</h3>
                        <p className='item_type'>{product.type}</p>
                        <div className='item_cost'>
                            <p className='current_cost'>Rp {product.cost}</p>
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
            <div><button className={title === 'Related Products' ? 'show_more_single' : 'show_more'} onClick={() => { setShowMore(!showMore) }}>Show {showMore ? 'Less' : 'More'}</button></div>
        </section>

    )
}

export default Products