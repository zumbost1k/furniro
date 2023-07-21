import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        product: productSlice
    }
})