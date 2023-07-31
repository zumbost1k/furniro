import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CompareProd: []
}

export const comparedProductSlice = createSlice({
    name: 'CompareProd',
    initialState,
    reducers: {
        addProductToCompare: (state, action) => {
            const productIdToAdd = action.payload;
            if (!state.CompareProd.includes(productIdToAdd)) {
                state.CompareProd.length < 2 ?
                    state.CompareProd = state.CompareProd.concat(productIdToAdd)
                    :
                    state.CompareProd = [productIdToAdd, state.CompareProd[0]]
            }
        }
    },


})



export const { addProductToCompare } = comparedProductSlice.actions
export default comparedProductSlice.reducer