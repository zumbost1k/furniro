import React, { useState } from 'react';
import './product_info.css'
import { useParams } from 'react-router';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/todo/selectedProducts';
import { addProductToCompare } from '../features/compare/compare';
const productPhotos = [
    {
        path: 'blue.svg',
        name: 'blue'
    },
    {
        path: 'grey.svg',
        name: 'grey'
    },
    {
        path: 'single_chair.svg',
        name: 'single chair'
    },
    {
        path: 'single_sofa.svg',
        name: 'single sofa'
    },
    {
        path: 'triple_chair.svg',
        name: 'triple chair'
    },
]

const messengers = [
    {
        path: 'facebook.svg',
        name: 'Facebook'
    },
    {
        path: 'linkedin.svg',
        name: 'Linkedin'
    },
    {
        path: 'twitter.svg',
        name: 'Twitter'
    },
]

const ProductInfo = () => {
    const [productAmount, setProductAmount] = useState('1')
    const [ratingValue, setRatingValue] = useState(3.5);
    const { productName } = useParams();
    const [currentPhoto, setCurrentPhoto] = useState(productPhotos[4])
    const dispatch = useDispatch()
    const smallPhotos = productPhotos.filter(product => {
        if (product.name !== currentPhoto.name) {
            return product
        }
        else {
            return false
        }
    })

    const lower = () => {
        if (parseInt(productAmount) > 1) { (setProductAmount((parseInt(productAmount) - 1).toString())) }

    }

    const raise = () => {
        if (parseInt(productAmount) < 10) { setProductAmount((parseInt(productAmount) + 1).toString()) }
    }
    const addProductHandler = () => {
        const productInf = {
            id: 'single_product_id',
            quantity: productAmount
        }
        dispatch(addProduct(productInf))
    }
    const addCompareProductHandler = () => {
        dispatch(addProductToCompare('single_product_id'))
    }
    return (
        <section className='product_info_section'>
            <div className='photos_product'>
                <div className='photos_product_left'>{smallPhotos.map(product => {
                    return (
                        <div key={product.name} className='product_left' onClick={e => { setCurrentPhoto(product) }} >
                            <img width='76' height='76' src={`/photos/productInfoPhotos/${product.path}`} alt={product.name} />
                        </div>
                    )

                })}</div>
                <div className='photo_product_main'>
                    <img width='423' height='500' src={`/photos/productInfoPhotos/${currentPhoto.path}`} alt={currentPhoto.name} />
                </div>
            </div>
            <div className='text_product'>
                <h2 className='product_info_title'>{productName}</h2>
                <p className='product_info_cost'>Rs. 250,000.00</p>
                <div className='rating'>
                    <Rating
                        name='half-rating'
                        emptyIcon={<div className='empty_star'>&#9733;</div>}
                        precision={0.5}
                        value={ratingValue}
                        onChange={(event, newValue) => { setRatingValue(newValue) }}
                    />
                    <p className='customer_review'>5 Customer Review</p>
                </div>
                <p className='text_product_lorem'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                    stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
                <div className='product_size'>
                    <p className='product_size_text'>Size</p>
                    <form className='radio_sizes'>
                        <div className='size_relative'>
                            <input type='radio' name='size' id='l' className='size_radio' />
                            <label className='l size_label' htmlFor='l'>L</label>
                        </div>
                        <div className='size_relative'>
                            <input type='radio' name='size' id='xl' className='size_radio' />
                            <label className='xl size_label' htmlFor='xl'>XL</label>
                        </div>
                        <div className='size_relative'>
                            <input type='radio' name='size' id='xs' className='size_radio' />
                            <label className='xs size_label' htmlFor='xs'>XS</label>
                        </div>
                    </form>
                </div>
                <div className='product_color'>
                    <p className='product_color_text'>Color</p>
                    <form className='radio_colors'>
                        <div className='color_relative'>
                            <input type='radio' name='color' id='purple' className='color_radio' />
                            <label className='purple_label color_label' htmlFor='purple' />
                        </div>
                        <div className='color_relative'>
                            <input type='radio' name='color' id='black' className='color_radio' />
                            <label className='black_label color_label' htmlFor='black' />
                        </div>
                        <div className='color_relative'>
                            <input type='radio' name='color' id='orange' className='color_radio' />
                            <label className='orange_label color_label' htmlFor='orange' />
                        </div>
                    </form>
                </div>
                <div className='items_amount'>
                    <div className='items_amount_calc'>
                        <button type='button' className='amount_calc_button' onClick={lower}>-</button>
                        <input
                            className='amount_textholder'
                            type='text'
                            value={productAmount}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const regex = /^[^+-]+$/;
                                if (regex.test(inputValue) && (inputValue.length <= 1 || inputValue === '10')) {
                                    setProductAmount(inputValue);
                                }
                            }}
                        />
                        <button type='button' className='amount_calc_button' onClick={raise}>+</button>
                    </div>
                    <div className='add_compare'>
                        <button type='button' className='add_cart add_compare_btn' onClick={() => addProductHandler()}>Add To Cart</button>
                        <button type='button' onClick={addCompareProductHandler} className='compare add_compare_btn'>+ &nbsp;Compare</button>
                    </div>
                </div>
                <div className='product_info_footer'>
                    <div className='product_info_item product_info_item_names'>
                        <p>SKU</p>
                        <p>Category</p>
                        <p>Tags</p>
                        <p>Share</p>
                    </div>
                    <div className='product_info_item'>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div className='product_info_item'>
                        <p>SS001</p>
                        <p>{productName}</p>
                        <p>Sofa, Chair, Home, Shop</p>
                        <p className='messenger_links'>{messengers.map((messenger) => {
                            return (
                                <img key={messenger.name} className='product_info_photo' width='20' height='20' src={`/photos/productInfoPhotos/${messenger.path}`} alt={messenger.name} />
                            )
                        })}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo