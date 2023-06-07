import {createSlice} from '@reduxjs/toolkit'

const Slice = createSlice({
    name: 'mus_store',
    initialState:{
        itemsUsers: {
            isAunthenticated: null,
            username:'',
            id: '',
        },
        itemsCat: {
            id: ''
        },
        itemsSubCat: {
            id: ''
        },
        itemsInCart : [],
        products: {
            id: null,
            title: '',
            price: '',
        }
    },
    reducers: {
        SetCatId: (state, action) => {
            state.itemsCat.id = action.payload
        },
        SetSubCatId: (state, action) => {
            state.itemsSubCat.id = action.payload
        },
        Setusername: (state, action) => {
            state.itemsUsers.username = action.payload
        },
        Setid: (state, action) => {
            state.itemsUsers.id = action.payload
        },
        SetItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(products => products.id !== action.payload)
        },
        SetProductId: (state, action) => {
            state.itemsUsers.id=action.payload
        },
        SetProductTitle: (state, action) => {
            state.itemsUsers.title=action.payload
        },
        SetProductPrice: (state, action) => {
            state.itemsUsers.price=action.payload
        },
        SetIsAuthentificated: (state, action) => {
            state.itemsUsers.isAunthenticated=true
        },
    }
})

export const {SetCatId, SetSubCatId, Setusername, Setid, SetItemInCart, SetProductId, SetProductTitle, SetProductPrice, deleteItemFromCart, SetIsAuthentificated }= Slice.actions;
export default Slice.reducer;