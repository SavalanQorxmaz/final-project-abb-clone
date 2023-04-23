import { configureStore } from "@reduxjs/toolkit";
import screenReducer from './screenSlice'
import serchBarReducer from './slices/searchSlice'
import headerReducer from './slices/headerSlice'


export const store = configureStore({
    reducer: {
        screenPosition: screenReducer,
        searchBar: serchBarReducer,
        header: headerReducer, 
    }
})