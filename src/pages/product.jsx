import React from 'react';
import ProductsDescriptions from '@/description/description';
import Products from '@/products/products';

const ProductInfo = React.lazy(() => import('@/product_info/product_info'));
const ProductPath = React.lazy(() => import('@/product_path/product_path'));
const ProductPage = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <ProductPath />
                <ProductInfo />
            </React.Suspense>
            <ProductsDescriptions />
            <Products title={'Related Products'} />
        </div>
    )
}

export default ProductPage