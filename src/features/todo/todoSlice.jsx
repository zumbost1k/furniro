import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || []
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
        }
    }
})

export const { addProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer