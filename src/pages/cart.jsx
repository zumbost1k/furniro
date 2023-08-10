import React from 'react';
import ShopHeader from '@/shop_header/shop_header';
import CartTotal from '@/cart_total/cart_total';
import DiscountShop from '@/discount_shop/discount_shop';
const CartPage = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Cart'} />
            <CartTotal />
            <DiscountShop />
        </div>
    )
}

export default CartPage