import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

const linksWord = ['Home', 'Shop', 'About', 'Contact']
const linksWordsList = linksWord.map(function (link) {
    return (
        <Link className='menu_link' to={link}>
            {link}
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