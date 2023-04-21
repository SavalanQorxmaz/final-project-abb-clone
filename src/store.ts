import { configureStore } from "@reduxjs/toolkit";
import screenReducer from './screenSlice'


export const store = configureStore({
    reducer: {
        screenPosition: screenReducer,
    }
})