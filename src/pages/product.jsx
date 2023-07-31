import React from "react";
import ProductPath from "../product_path/product_path";
import ProductInfo from "../product_info/product_info";
import Description from "../description/description";
import Products from "../products/products";

const Product = () => {
    return (
        <div>
            <ProductPath />
            <ProductInfo />
            <Description />
            <Products title={'Related Products'}/>
        </div>
    )
}

export default Product