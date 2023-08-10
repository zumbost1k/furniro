import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const footerLinks = {
    links: [
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
    ],
    help: [
        {
            text: 'Payment Options',
            path: 'home'
        },
        {
            text: 'Returns',
            path: 'home'
        },
        {
            text: 'Privacy Policies',
            path: 'home'
        }]
}





const FooterLinksList = ({ links }) => {
    return links.map((link) => {
        return (
            <Link key={link} className='footer_link' to={link}>
                {link}
            </Link>
        )
    })
}



const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <div className='funiro_col furniro_col_first'>
                    <h3 className='funiro'><img src="/photos/funiro..svg" alt="funiro." /></h3>
                    <p className='funiro_lorem'>400 University Drive Suite 200 Coral Gables,
                        <br /> FL 33134 USA</p>
                </div>
                <div className='funiro_col furniro_col_second'>
                    <h3 className='links_title'>Links</h3>
                    {<FooterLinksList links={footerLinks.links} />}
                </div>
                <div className='funiro_col furniro_col_second'>
                    <h3 className='links_title'>Help</h3>
                    {<FooterLinksList links={footerLinks.help} />}
                </div>
                <div className='funiro_col furniro_col_third'>
                    <h3 className='links_title'>Newsletter</h3>
                    <form className='footer_form' action=''>
                        <input type='email' className='email_footer' placeholder='Enter Your Email Address' />
                        <button type='button' className='subscribe' >SUBSCRIBE</button>
                    </form>

                </div>
            </div>
            <p className='furino'>2023 furino. All rights reverved</p>
        </footer>
    )
}

export default Footer