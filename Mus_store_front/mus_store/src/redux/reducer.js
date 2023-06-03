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
    }
})

export const {SetCatId, SetSubCatId, Setusername, Setid} = Slice.actions;
export default Slice.reducer;