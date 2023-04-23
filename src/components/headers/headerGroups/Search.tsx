import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectScrollTop } from '../../../screenSlice'
import { showSearchBar } from '../../../slices/searchSlice'
import { selectSearcBar } from '../../../slices/searchSlice'
import flagEn from '../../../icons/flag-uk.svg'
import flagRu from '../../../icons/flag-ru.svg'

const Search = () => {

  const scrollTop = useSelector(selectScrollTop)
  const dispatch = useDispatch()
  const searchBar = useSelector(selectSearcBar)

  const [changeLanguage, setChangeLanguage] = useState(false)

  // scrollda dil penceresi baglansin deye
  useEffect(()=>{
    setChangeLanguage(false)
  },[scrollTop])

document.body.addEventListener('click', (e:any) => {
  
    if(changeLanguage){
   if((!e.target.classList.contains('change-language-cover'))){
   
      setChangeLanguage(false)
    }
  }
})


  const changeLanguageF = (e:{target:EventTarget}) => {

      setChangeLanguage(!changeLanguage)
  }


  return (
    <>
      <ul  className='search'>
        <li  onClick={()=>dispatch(showSearchBar(!searchBar))} className='search-menu'>
        <i className="fa-solid fa-magnifying-glass"></i> &nbsp; 
        <span>Axtarış</span>
        
   
        </li>
        <li  className='language'>
       <div className='change-language'>
       <span className='selected-language'>AZ</span> &nbsp; 
            <i className= {changeLanguage ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i>
            
            <div className={changeLanguage ? 'protrusion' : 'display-none'}></div>
            <div  onClick={changeLanguageF}   className='change-language-cover'></div>
       </div>
          <div className={changeLanguage ? 'other-language ' : ' display-none'}>
          <div onClick={()=>console.log('en')}>
           <img src={flagEn}alt="" /> &nbsp;
            <span> EN</span>
            </div>
          <div onClick={()=>console.log('ru')}>
          <img src={flagRu}alt="" />&nbsp;
            <span>RU</span>
            </div>
          </div>
        </li>
        <li>
            <i className="fa-solid fa-phone"></i> &nbsp;
            <span>947</span>
            </li>
            
        
      </ul>
   
    </>
      
  )
}

export default Search