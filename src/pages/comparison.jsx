import React from 'react';
import ShopHeader from '../shop_header/shop_header';
import DiscountShop from '../discount_shop/discount_shop';
import ComparisonBody from '../comparisonBody/comparisonBody';
const ComparisonPage = () => {
    return (
        <div>
            <ShopHeader logo={true} path={'Product Comparison'} underTitle={'Comparison'} classname={'shop_header_icon_comparison'}/>
            <ComparisonBody />
            <DiscountShop />
        </div>
    )
}

export default ComparisonPage