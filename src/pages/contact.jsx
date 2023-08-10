import React from 'react';
import ShopHeader from '../shop_header/shop_header';
import DiscountShop from '../discount_shop/discount_shop';
import ContactForm from '../contact_form/contact_form';

const ContactPage = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Contact'} />
            <ContactForm />
            <DiscountShop />
        </div>
    )
}

export default ContactPage