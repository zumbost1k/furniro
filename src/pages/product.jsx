import React from 'react';
import ProductPath from '@/product_path/product_path';
import ProductInfo from '@/product_info/product_info';
import ProductsDescriptions from '@/description/description';
import Products from '@/products/products';


const Product = () => {
    return (
        <div>
            <ProductPath />
            <ProductInfo />
            <ProductsDescriptions  />
            <Products title={'Related Products'} />
        </div>
    )
}

export default Product