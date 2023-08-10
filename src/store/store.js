import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/todo/selectedProducts';
import allProductSlice from '../features/all_products/all_products';
import comparedProductSlice from '../features/compare/compare';

export const store = configureStore({
    reducer: {
        product: productSlice,
        productList: allProductSlice,
        comparedProduct: comparedProductSlice,
    }
})

