import React from 'react';
import ShopHeader from '@/shop_header/shop_header';
import DiscountShop from '@/discount_shop/discount_shop';
import CheckoutBody from '@/checkout_body/checkout_body';

const Checkout = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Checkout'} underTitle={'Checkout'} classname={'shop_header_icon_checkout'} dynamic={true} />
            <CheckoutBody />
            <DiscountShop />
        </div>
    )
}

export default Checkout