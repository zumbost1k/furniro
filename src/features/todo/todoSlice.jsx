import { createSlice } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';
const products = JSON.parse(localStorage.getItem('products')) || [];


const calculateTotalCost = (products) => {
    return products.reduce((accumulator, product) => {
        const costString = product.info.cost;
        const cost = parseInt(costString) * parseInt(product.number);
        return accumulator + cost;
    }, 0);
};
const initialState = {
    products: products,
    totalCost: calculateTotalCost(products) 
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let found = false;
            state.products.forEach((product) => {
                if (product.info.name === action.payload.info.name) {
                    product.number = (parseInt(product.number) || 0) + parseInt(action.payload.number);
                    found = true;
                }
            })
            if (!found) { state.products.push(action.payload) }
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        changeNumberProduct: (state, action) => {
            const { id, number } = action.payload;
            const product = state.products.find((product) => product.id === id);
            if (product) {
                product.number = number;
            }
            localStorage.setItem('products', JSON.stringify(state.products));
        }

    }
})

export const useTotalCost = (products) => {
    const [totalCost, setTotalCost] = useState(calculateTotalCost(products));

    useEffect(() => {
        setTotalCost(calculateTotalCost(products));
    }, [products]);

    return totalCost.toLocaleString('en-US');
};

export const { addProduct, deleteProduct, changeNumberProduct } = productSlice.actions
export default productSlice.reducer