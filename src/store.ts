import { configureStore } from "@reduxjs/toolkit";
import screenReducer from './screenSlice'
import serchBarReducer from './slices/searchSlice'


export const store = configureStore({
    reducer: {
        screenPosition: screenReducer,
        searchBar: serchBarReducer,
    }
})