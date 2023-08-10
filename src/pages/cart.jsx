import React from 'react';
import ShopHeader from '@/shop_header/shop_header';
import CartTotal from '@/cart_total/cart_total';
import DiscountShop from '@/discount_shop/discount_shop';
const CartPage = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Cart'} underTitle={'Cart'} classname={'shop_header_icon_blog'}/>
            <CartTotal />
            <DiscountShop />
        </div>
    )
}

export default CartPage