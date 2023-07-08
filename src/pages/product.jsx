import React from "react";
import ProductPath from "../product_path/product_path";
import ProductInfo from "../product_info/product_info";
import Description from "../description/description";

const Product = () => {
    return (
        <div>
            <ProductPath />
            <ProductInfo />
            <Description />
        </div>
    )
}

export default Product