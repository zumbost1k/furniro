
import React from 'react';
import './comparisonBody.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectProductByCompared, selectProductById } from '../store/selectors';
import { Rating } from '@mui/material';
import { changeRatingValue } from '../features/all_products/all_products';
import { Link } from 'react-router-dom';
import { addProductToCompare } from '../features/compare/compare';
import { addProduct } from '../features/todo/selectedProducts';

const HeaderInfoList = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className='comparison_first_table_line_item_photos'>
            <div className='compared_prod_photo_body'> <img width='280' height='177' className='compared_prod_photo' src={`/photos/products/${product.path}`} alt={product.name} /></div>
            <h4 className='compared_prod_name'>{product.name}</h4>
            <p className='compared_prod_cost'>Rs. {product.cost}</p>
            <div className='compared_rating'>
                <p className='compared_product_number_rating'>{product.rating}</p>
                <Rating
                    name='half-rating'
                    emptyIcon={<div className='compared_empty_star'>&#9733;</div>}
                    precision={0.5}
                    value={product.rating}
                    onChange={(event, newValue) => {
                        dispatch(changeRatingValue(
                            {
                                id: product.id,
                                newRating: newValue
                            }
                        ))
                    }}
                />
                <p className='compared_customer_review'>{product.reviews} Review </p>
            </div>
        </div>
    )


}

const ComparisonBody = () => {

    const dispatch = useDispatch()
    const selectedProducts = useSelector(selectProductById)
    const [firstComparedProduct, secondComparedProduct] = useSelector(selectProductByCompared)
    const addProductHandler = (product) => {
        const productInf = {
            id: product.id,
            quantity: 1
        }
        dispatch(addProduct(productInf))
    }
    if (firstComparedProduct && secondComparedProduct) {
        return (
            <section className='comparison_body_section'>
                <div className='comparison_first_table_line'>
                    <div className='comparison_first_table_line_item_header'>
                        <h3 className='compared_request'>Go to Product page for more Products</h3>
                        <Link className='compared_request_link' to='/shop'>View More</Link>
                    </div>
                    <HeaderInfoList product={firstComparedProduct} />
                    <HeaderInfoList product={secondComparedProduct} />
                    <div className='comparison_first_table_line_item_add_items'>
                        <label className='nother_product_label' for='nother_prod'>Add A Product</label>
                        <select className='nother_product_selector' onChange={newProduct => { dispatch(addProductToCompare(newProduct.target.value)) }} name='nother_prod' id='nother_prod'>
                            <option defaultValue disabled value='default'>Choose a Product</option>
                            {selectedProducts.map(product => {
                                return (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='compare_table_container'>
                    <table className='compare_table'>

                        {tableInfo.map(tableItem => {
                            if (tableItem.header) {
                                return (
                                    <thead key={tableItem.key}>
                                        <tr >
                                            <th className='compare_table_header compare_table_text' >{tableItem.text}</th>
                                            <th className='compare_table_item' ></th>
                                            <th className='compare_table_item'></th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                )
                            }
                            else {
                                return (
                                    <tbody key={tableItem.key}>
                                        <tr >
                                            <td><p className='compare_text_table compare_item_first'>{tableItem.text}</p></td>
                                            <td className='compare_table_item_pad compare_table_item compare_item_second'><p className='compare_text_table'>{firstCompared[tableItem.key]}</p></td>
                                            <td className='compare_table_item_pad compare_table_item compare_item_third'><p className='compare_text_table'>{secondCompared[tableItem.key]}</p></td>
                                            <td className='compare_table_item_pad compare_item_foufth'></td>
                                        </tr>
                                    </tbody>

                                )
                            }
                        })}
                        <tbody>
                            <tr>
                                <td className='compare_item_btn'></td>
                                <td className='compare_item_btn'><button onClick={() => { addProductHandler(firstComparedProduct) }} type='button' className='compare_table_btn'>Add To Cart</button></td>
                                <td className='compare_item_btn'><button onClick={() => { addProductHandler(secondComparedProduct) }} type='button' className='compare_table_btn'>Add To Cart</button></td>
                                <td className='compare_item_btn'></td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </section>
        )
    }

}

export default ComparisonBody