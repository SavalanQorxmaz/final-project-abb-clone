import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectScrollTop } from '../../../screenSlice'
import { showSearchBar } from '../../../slices/searchSlice'
import { selectSearcBar } from '../../../slices/searchSlice'
import flagEn from '../../../icons/flag-uk.svg'
import flagRu from '../../../icons/flag-ru.svg'
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { darkMode, selectDarkMode } from '../../../slices/mainSlice'

const Search = () => {

  const scrollTop = useSelector(selectScrollTop)
  const dispatch = useDispatch()
  const searchBar = useSelector(selectSearcBar)
  const selectMode = useSelector(selectDarkMode)

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


  const undefinedLanguageAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
      });
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
          <div onClick={()=>{ swal({
      title: "Xəta",
      text: "Dil mövcud",
      icon: "warning",
    });}}>
           <img src={flagEn}alt="" /> &nbsp;
            <span> EN</span>
            </div>
          <div   onClick={()=>{ swal({
      title: "Xəta",
      text: "Dil mövcud deyil",
      icon: "warning",
    });}}>
          <img src={flagRu}alt="" />&nbsp;
            <span>RU</span>
            </div>
          </div>
        </li>
        <li>
            <i className="fa-solid fa-phone"></i> &nbsp;
            <span>947</span>
            </li>
            <li>

              {
                selectMode ? 
                <i onClick={()=>dispatch(darkMode(false))} className="fa-solid fa-lightbulb"></i>
                :
                <i onClick={()=>dispatch(darkMode(true))} className="fa-regular fa-lightbulb"></i>
              }
              
             
            </li>
            
        
      </ul>
   
    </>
      
  )
}

export default Search