
import { createSlice } from "@reduxjs/toolkit";


interface mainSliceType {
       mode:{
        darkMode: boolean
       }
    
}

const initialState = {
    darkMode: false
}


const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        darkMode: (state, action)=>{
            state.darkMode = action.payload
        }
    }
})


export const selectDarkMode = (state:mainSliceType)=> state.mode.darkMode

export const {darkMode} = mainSlice.actions

export default mainSlice.reducer