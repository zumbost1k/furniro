import React from 'react';
import './cart_total.css'
import { useDispatch, useSelector } from 'react-redux';
import {
    changeQuantityProduct, deleteProduct

} from '../features/todo/selectedProducts';
import { Link } from 'react-router-dom';
import { selectProductById, selectTotalCost } from '../store/selectors';

const costChecker = (cost, quantity) => {
    const productCost = parseInt(cost) * parseInt(quantity);
    return productCost.toLocaleString('en-US')
}

const CartTotal = () => {
    const selectedProducts = useSelector(selectProductById)
    const totalCost = useSelector(selectTotalCost)
    const dispatch = useDispatch()
    const deleteProd = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <section className='cart_total_section'>
            <div className='cart_total_product_item'>
                <div className='cart_total_product_item_header'>
                    <p className='item_header_product product_item_header'>Product</p>
                    <p className='item_header_price' data-testid="price">Price</p>
                    <p className='item_header_quantity'>Quantity</p>
                    <p className='item_header_subtotal'>Subtotal</p>
                </div>
                <div className='cart_total_products'>
                    {selectedProducts.map(product => {
                        let productQuantity = product.quantity
                        return (
                            <div key={`${product.id}`} className='cart_total_item'>
                                <div className='cart_item_back'><img className='cart_item_photo' width='105' height='105' src={`/photos/products/${product.path}`} alt={product.name} /></div>
                                <p className='cart_item_name cart_item_text'>{product.name}</p>
                                <p className='cart_item_cost cart_item_text'>Rs. {product.cost}</p>
                                <input className='cart_item_number cart_item_text'
                                    value={productQuantity}
                                    type='number'
                                    onChange={e => {
                                        const inputValue = Number(e.target.value)
                                        if (inputValue >= 1 && inputValue <= 10) {
                                            dispatch(
                                                changeQuantityProduct({
                                                    id: product.id,
                                                    quantity: inputValue
                                                })
                                            )
                                        }
                                    }}

                                />
                                <p className='cart_item_total_cost cart_item_text'>Rs. {costChecker(product.cost, product.quantity)}</p>
                                <button type='button' className='cart_item_delete' onClick={() => { deleteProd(product.id) }}><img src='/photos/dumpster.svg' alt='dumpster' width='28' height='28' /></button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='cart_total_info_block'>
                <h3 className='cart_total_info_titlte'>Cart Totals</h3>
                <div className='total_cost_block_item subtotal_info_item'>
                    <p className='cart_total_cost_text'>Subtotal</p>
                    <p className='cart_subtotal_cost_value'>Rs.
                        {totalCost}
                    </p>
                </div>
                <div className='total_cost_block_item total_info_item'>
                    <p className='cart_total_cost_text'>Total</p>
                    <p className='cart_total_cost_value'>Rs.
                        {totalCost}
                    </p>
                </div>
                <button type='button' className='cart_check_btn'><Link className='cart_check_out_inner' to='/product/checkout'>Check Out</Link></button>
            </div>
        </section>
    )
}

export default CartTotal