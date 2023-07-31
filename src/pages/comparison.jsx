import React from 'react';
import ShopHeader from '../shop_header/shop_header';
import DiscountShop from '../discount_shop/discount_shop';
import ComparisonBody from '../comparisonBody/comparisonBody';
const Comparison = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Product Comparison'} />
            <ComparisonBody />
            <DiscountShop />
        </div>
    )
}

export default Comparison