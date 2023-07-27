import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        {
            path: 'grifo.png',
            name: 'Grifo',
            type: 'Night lamp',
            cost: '2.500.000',
            oldCost: '',
            new: false,
            discount: ''
        },
        {
            path: 'leviosa.png',
            name: 'Leviosa',
            type: 'Stylish cafe chair',
            cost: '2.500.000',
            oldCost: '',
            new: false,
            discount: ''
        },
        {
            path: 'lolito.png',
            name: 'Lolito',
            type: 'Luxury big sofa',
            cost: '7.000.000',
            oldCost: '14.000.000',
            discount: '-50%'
        },
        {
            path: 'muggo.png',
            name: 'Muggo',
            type: 'Small mug',
            cost: '150.000',
            oldCost: '',
            new: true,
            discount: ''

        },
        {
            path: 'pingky.png',
            name: 'Pingky',
            type: 'Cute bed set',
            cost: '7.000.000',
            oldCost: '14.000.000',
            discount: '-50%',
            new: false,
        },
        {
            path: 'potty.png',
            name: 'Potty',
            type: 'Minimalist flower pot',
            cost: '500.000',
            oldCost: '',
            new: true,
            discount: ''
        },
        {
            path: 'respira.png',
            name: 'Respira',
            type: 'Outdoor bar table and stool',
            cost: '500.000',
            oldCost: '',
            new: true,
            discount: ''
        },
        {
            path: 'syltherine.png',
            name: 'Syltherine',
            type: 'Stylish cafe chair',
            cost: '2.500.000',
            oldCost: '3.500.000',
            discount: '-30%',
            new: false
        },
    ]

}

export const allProductSlice = createSlice({
    name: 'all_products',
    initialState,
    reducers: {

    }
})

export default allProductSlice.reducer