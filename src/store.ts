import { configureStore } from "@reduxjs/toolkit";
import screenReducer from './screenSlice'
import serchBarReducer from './slices/searchSlice'
import headerReducer from './slices/headerSlice'
import mainSliceReducer from './slices/mainSlice'


export const store = configureStore({
    reducer: {
        screenPosition: screenReducer,
        searchBar: serchBarReducer,
        header: headerReducer, 
        mode: mainSliceReducer
    }
})