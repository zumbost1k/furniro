import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedProducts: [],
}

export const productSlice = createSlice({
    name: 'selectedProducts',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIdToAdd = action.payload.id;
            const existingProduct = state.selectedProducts.find(p => p.id === productIdToAdd);

            if (existingProduct) {
                state.selectedProducts = state.selectedProducts.map(p => {
                    if (p.id === productIdToAdd) {
                        return {
                            ...p,
                            quantity: parseInt(p.quantity) + parseInt(action.payload.quantity)
                        };
                    }
                    return p;
                });
            }
            else {
                state.selectedProducts = state.selectedProducts.concat({
                    id: action.payload.id,
                    quantity: action.payload.quantity
                });
            }

        },
        deleteProduct: (state, action) => {
            state.selectedProducts = state.selectedProducts.filter((product) => product.id !== action.payload)
        },
        changeNumberProduct: (state, action) => {
            const { id, quantity } = action.payload;
            state.selectedProducts = state.selectedProducts.map(p => {
                if (p.id === id) {
                    return { ...p, quantity:  quantity };
                }
                return p;
            });
        }

    }
})



export const { addProduct, deleteProduct, changeNumberProduct } = productSlice.actions
export default productSlice.reducer