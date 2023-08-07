import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


const linksWord = [
    {
        text: 'Home',
        path: 'home'
    },
    {
        text: 'Shop',
        path: '/shop?page=0'
    },
    {
        text: 'About',
        path: 'about?page=0'
    },
    {
        text: 'Contact',
        path: 'contact'
    },
]
const linksWordsList = linksWord.map((link) => {
    return (
        <Link className='menu_link' to={link.path}>
            {link.text}
        </Link>
    );
});
const linksPhoto = ['person.svg', 'magnifier.svg', 'heart.svg', 'shoppingCart.svg']
const linksPhotoList = linksPhoto.map(function (link) {
    return (
        <Link to=''>
            <img
                src={`/photos/${link}`}
                alt={link} />
        </Link>
    );
});
const Nav = () => {

    return (
        <nav className='nav'>
            <div className='main_logo'>
                <img src='/photos/logo.svg' alt='main' />
            </div>
            <div className='menu_links'>
                {linksWordsList}
            </div>
            <div className='header_photos'>
                {linksPhotoList}
            </div>
        </nav>
    )
}

export default Nav