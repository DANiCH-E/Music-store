import {configureStore} from "@reduxjs/toolkit";
import MusReducer from './reducer';

export const store = configureStore({
    reducer: {
        cart: MusReducer
    }
})