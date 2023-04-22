import {createSlice} from '@reduxjs/toolkit'

interface searchBarType {
    searchBar: {
        showSearchBar: boolean
    }
    
}
const initialState = {
    showSearchBar: false,

}

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        showSearchBar: (state, action) => {
            state.showSearchBar = action.payload
        }
    }
})

export const selectSearcBar = (state:searchBarType) => state.searchBar.showSearchBar;

export const {showSearchBar} = searchBarSlice.actions

export default searchBarSlice.reducer