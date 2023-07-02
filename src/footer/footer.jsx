import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const footerLinks = [
    ['Home', 'Shop', 'About', 'Contact'],
    ['Payment Options', 'Returns', 'Privacy Policies']
]

const FooterLinksList = ({ elem, index }) => {
    return elem[index].map((link) => {
        return (
            <Link className='footer_link' to=''>
                {link}
            </Link>
        )
    })
}



const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <div className='funiro_col'>
                    <h3 className='funiro'>Funiro.</h3>
                    <p className='funiro_lorem'>400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</p>
                </div>
                <div className='funiro_col'>
                    <h3 className='links_title'>Links</h3>
                    {<FooterLinksList elem={footerLinks} index={0} />}
                </div>
                <div className='funiro_col'>
                    <h3 className='links_title'>Help</h3>
                    {<FooterLinksList elem={footerLinks} index={1} />}
                </div>
                <div className='funiro_col'>
                    <h3 className='links_title'>Newsletter</h3>
                    <form action=''>
                        <input type='email' className='email_footer' placeholder='Enter Your Email Address' />
                        <input type='submit' className='subscribe' value='SUBSCRIBE' />
                    </form>

                </div>
            </div>
            <p className='furino'>2023 furino. All rights reverved</p>
        </footer>
    )
}

export default Footer