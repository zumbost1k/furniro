import React from 'react';
import ShopHeader from '../shop_header/shop_header';
import PaginatedItems from '../pagination/get_data';
import DiscountShop from '../discount_shop/discount_shop';

const ShopPage = () => {
    return (
        <div>
            <ShopHeader path={'Shop'}/>
            <PaginatedItems />
            <DiscountShop />
        </div>
    )
}

export default ShopPage