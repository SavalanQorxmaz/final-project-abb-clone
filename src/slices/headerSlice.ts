import {createSlice} from '@reduxjs/toolkit'

interface headerType {
    header: {
        selectedLink: string;
    }
    
}
const initialState = {
    selectedLink: 'ferdi'

}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        selectedLink: (state, action) => {
            state.selectedLink = action.payload
        }
    }
})

export const selectSelectedLink = (state:headerType) => state.header.selectedLink;

export const {selectedLink} = headerSlice.actions

export default headerSlice.reducer