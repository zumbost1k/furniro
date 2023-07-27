import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/todo/todoSlice';
import allProductSlice from '../features/all_products/all_products';

export const store = configureStore({
    reducer: {
        product: productSlice,
        productList: allProductSlice,
    }
})