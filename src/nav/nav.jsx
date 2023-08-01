import React, { useState } from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteProduct
    // , useTotalCost
} from '../features/todo/todoSlice';
import { selectProductById, selectTotalCost } from '../store/selectors';

const linksWord = ['Home', 'Shop', 'About', 'Contact']
const linksWordsList = linksWord.map((link) => {
    return (
        <Link key={`${link}_links_words_list`} className='menu_link' to={link}>
            {link}
        </Link>
    );
});
const navLinks = [
    {
        path: 'person',
        extraClass: false
    },
    {
        path: 'magnifier',
        extraClass: false
    },
    {
        path: 'heart',
        extraClass: false
    },
    {
        path: 'shoppingCart',
        extraClass: true
    },
]



const LinksPhotoList = ({ links, handleOpenModal }) => {
    return links.map(link => {
        return (
            <button key={`${link.path}_links_photo_list`} type='button' onClick={link.extraClass ? handleOpenModal : () => { }} className={link.extraClass ? 'navig_item shopping_cart' : 'navig_item'}>
                <img
                    src={`/photos/${link.path}.svg`}
                    alt={link.path} />
            </button>
        );
    })

};
const Nav = () => {
    const [showModal, setShowModal] = useState(false)
    const selectedProducts = useSelector(selectProductById)
    const totalCost = useSelector(selectTotalCost)
    const dispatch = useDispatch()

    const deleteProd = (id) => {
        dispatch(deleteProduct(id))
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }


    return (
        <nav className='nav'>
            <div className='main_logo'>
                <img src='/photos/logo.svg' alt='main' />
            </div>
            <div className='menu_links'>
                {linksWordsList}
            </div>
            <div className='header_photos'>
                <LinksPhotoList links={navLinks} handleOpenModal={handleOpenModal} />
                <ReactModal
                    style={{
                        overlay: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            left: 'auto',
                            bottom: 'auto',
                            border: 'none',
                            background: 'white',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '0px',
                            outline: 'none',
                            padding: '0px',
                            width: '416px',
                            height: '746px',
                        },
                    }}
                    isOpen={showModal}
                    contentLabel='Minimal Modal Example'
                    ariaHideApp={false}
                >
                    <div className='modal_content'>
                        <div className='modal_top_line'>
                            <h3 className='modal_top_line_header'>Shopping Cart</h3>
                            <button type='button' onClick={handleCloseModal} className='modal_top_line_close'><img src='/photos/cart.svg' alt='cart' width='17' height='19' /></button>
                        </div>
                        <div className='todos_items'>
                            {selectedProducts.map(product => {
                                return (
                                    <div key={`${product.id}_todos_item`} className='todos_item'>
                                        <div className='todos_item_main_back'><img className='todos_item_main' width='105' height='105' src={`/photos/products/${product.path}`} alt={product.name} /></div>
                                        <div className='todos_item_text'>
                                            <h3 className='todos_item_title'>{product.name}</h3>
                                            <p className='todos_item_number'>{product.quantity} <span className='todos_item_cost'>X<span className='todos_item_cost_yel'>Rs. {product.cost}</span> </span></p>
                                        </div>
                                        <button type='button' className='todos_item_delete' onClick={() => { deleteProd(product.id) }}><img src='/photos/close_cart.svg' alt='close cart' width='20' height='20' /></button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='todos_total_cost'>
                            <p className='todos_total_cost_title'>Subtotal</p>
                            <p className='todos_total_cost_numbers'> Rs.
                                {totalCost}
                            </p>
                        </div>
                        <div className='todos_footer_btn_container'>
                            <Link to='product/cart' className='todos_footer_btn'>Cart</Link>
                            <Link to='product/checkout' className='todos_footer_btn'>Checkout</Link>
                            <Link to='product/comparison' className='todos_footer_btn'>Comparison</Link>
                        </div>
                    </div>
                </ReactModal>
            </div>
        </nav>
    )
}

export default Nav