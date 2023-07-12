import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const footerLinks = {
    links: ['Home', 'Shop', 'About', 'Contact'],
    help: ['Payment Options', 'Returns', 'Privacy Policies']
  }

const FooterLinksList = ({ link }) => {
    return link.map((link) => {
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
                <div className='funiro_col furniro_col_first'>
                    <h3 className='funiro'><img src="/photos/funiro..svg" alt="funiro." /></h3>
                    <p className='funiro_lorem'>400 University Drive Suite 200 Coral Gables,
                        <br /> FL 33134 USA</p>
                </div>
                <div className='funiro_col furniro_col_second'>
                    <h3 className='links_title'>Links</h3>
                    {<FooterLinksList link={footerLinks.links} />}
                </div>
                <div className='funiro_col furniro_col_second'>
                    <h3 className='links_title'>Help</h3>
                    {<FooterLinksList link={footerLinks.help} />}
                </div>
                <div className='funiro_col furniro_col_third'>
                    <h3 className='links_title'>Newsletter</h3>
                    <form className='footer_form' action=''>
                        <input type='email' className='email_footer' placeholder='Enter Your Email Address' />
                        <button  className='subscribe' >SUBSCRIBE</button>
                    </form>

                </div>
            </div>
            <p className='furino'>2023 furino. All rights reverved</p>
        </footer>
    )
}

export default Footer