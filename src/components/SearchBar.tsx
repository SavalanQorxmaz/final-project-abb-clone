import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectSearcBar } from '../slices/searchSlice'
import { showSearchBar } from '../slices/searchSlice'

const SearchBar = () => {

    const searchBar = useSelector(selectSearcBar)
    const dispatch = useDispatch()
  return (

    <div className= {searchBar ? 'search-content-back' : 'display-none'}>
    <div className="my-container">
    <div className='search-content'>
    <input type="text" placeholder='Axtar'/>
    <i onClick={()=>dispatch(showSearchBar(false))}  className="fa-solid fa-xmark"></i>
    </div>
    </div>
  </div>
  
  )
}

export default SearchBar