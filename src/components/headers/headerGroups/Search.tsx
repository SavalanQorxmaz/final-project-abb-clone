import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { selectScrollTop } from '../../../screenSlice'
import flagEn from '../../../icons/flag-uk.svg'
import flagRu from '../../../icons/flag-ru.svg'

const Search = () => {

  const scrollTop = useSelector(selectScrollTop)

  const [changeLanguage, setChangeLanguage] = useState(false)
  const [searchShow, setSearchShow] = useState(false)

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
        <li  onClick={()=>setSearchShow(!searchShow)} className='search-menu'>
        <i className="fa-solid fa-magnifying-glass"></i> &nbsp; 
        <span>Axtarış</span>
        
   
        </li>
        <li  className='language'>
       <div className='change-language'>
       <span className='selected-language'>AZ</span> &nbsp; 
            <i className= {changeLanguage ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down"} ></i>
            
            <div className={changeLanguage ? 'protrusion' : 'display-none'}></div>
            <div  onClick={changeLanguageF}   className='change-language-cover'></div>
       </div>
          <div className={changeLanguage ? 'other-language ' : ' display-none'}>
          <div onClick={()=>console.log('clicked')}>
           <img src={flagEn}alt="" /> &nbsp;
            <span> EN</span>
            </div>
          <div  onClick={()=>console.log('clicked')}>
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
      <div className={searchShow? 'search-content-back' : 'display-none'}>
        <div className="my-container">
        <div className='search-content'>
        <input type="text" placeholder='Axtar'/>
        <i onClick={()=>setSearchShow(false)} className="fa-solid fa-xmark"></i>
        </div>
        </div>
      </div>
    </>
      
  )
}

export default Search