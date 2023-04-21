import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { selectScrollTop } from '../screenSlice'
import HeaderTop from './headers/HeaderTop'
import HeaderMain from './headers/HeaderMain'
import HeaderBottom from './headers/HeaderBottom'

const Header = () => {
const scrollT = useSelector(selectScrollTop)


// useEffect(()=>{
//   // console.log( (document.documentElement || document.body.parentNode || document.body).scrollTop)
//   if (scrollT > 50) {
//     document.querySelector('.header')?.classList.remove('header-default');
//     document.querySelector('.header')?.classList.add('header-scroll')

//   } else {
//     document.querySelector('.header')?.classList.add('header-default');
//     document.querySelector('.header')?.classList.remove('header-scroll')
//   }
// },[ scrollT])


  return (
   
   
      <div className={scrollT > 50? 'header header-scroll': 'header header-default'}>
      <HeaderTop/>
      <HeaderMain/>
      <HeaderBottom/>
    </div>
  )
}

export default Header