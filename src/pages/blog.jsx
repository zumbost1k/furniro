import React from 'react';
import ShopHeader from '../shop_header/shop_header';
import DiscountShop from '../discount_shop/discount_shop';
import PaginatedItemsPost from '../pagination/get_data_post';

const Blog = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Blog'}/>
            <PaginatedItemsPost/>
            <DiscountShop />
        </div>
    )
}

export default Blog