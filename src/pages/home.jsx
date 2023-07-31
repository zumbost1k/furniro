import React from 'react';
import Chair from '@/chair/chair';
import Range from '@/range/range';
import Products from '@/products/products';
import MySlider from '@/slider/slider';
import FuniroFurniture from '@/FuniroFurniture/FuniroFurniture';

const HomePage = () => {
    return (
        <div>
            <Chair />
            <Range />
            <Products title={'Related Products'} />
            <MySlider />
            <FuniroFurniture />
        </div>
    )
}

export default HomePage