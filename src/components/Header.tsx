import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectScrollTop } from '../screenSlice'
import { selectScreenW } from '../screenSlice'
import HeaderTop from './headers/HeaderTop'
import HeaderMain from './headers/HeaderMain'
import HeaderBottom from './headers/HeaderBottom'
import Search from './headers/headerGroups/Search'

const Header = () => {
const scrollT = useSelector(selectScrollTop)
const screenW = useSelector(selectScreenW)
const [scrollIsUp, setScrollIsUp] = useState(false)
const [scrollArray, setScrollArray] = useState<number[]>([])





// SCROLL HADISESINDE HEADERIN IRELI GERI HEREKETINI TEMIN ETMEK UCUN
useEffect(() => {
 
 setScrollArray((item:number[]):number[]=> item.concat(scrollT))
  if(scrollArray.length > 30){
    setScrollArray((item:number[]):number[]=> item.slice(1))
  }
  if(( scrollArray[scrollArray.length-1] - scrollArray[0] ) < 20) {
    setScrollIsUp(false)
  }
  else if((scrollArray[0] - scrollArray[scrollArray.length-1]) < 20){
    setScrollIsUp(true)
  }
  if(scrollT <= 50){
    setScrollIsUp(false)
  }
}, [scrollT])



  return (
   
    
      (screenW === 'web') ?  <div className={scrollIsUp? 'header header-scroll': 'header header-default'}>
      <HeaderTop/>
      <HeaderMain/>
      <HeaderBottom/>
    </div>
     :
      <div className={scrollIsUp ? 'mobile-header mobile-header-scroll' : 'mobile-header mobile-header=default'}>
      <div className='mobile-header-top'>
        {/* <Search/> */}
        <HeaderMain/>
        </div>
       
        <HeaderBottom/>
       
       
        
        </div>
    
   
     
  )
}

export default Header