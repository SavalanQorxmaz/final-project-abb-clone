import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectScrollTop } from '../screenSlice'
import { selectScreenW } from '../screenSlice'
import HeaderTop from './headers/HeaderTop'
import HeaderMain from './headers/HeaderMain'
import HeaderBottom from './headers/HeaderBottom'
import Search from './headers/headerGroups/Search'
import abbIcon from '../icons/logo.svg'

const Header = () => {
const scrollT = useSelector(selectScrollTop)
const screenW = useSelector(selectScreenW)
const [scrollIsUp, setScrollIsUp] = useState(false)
const [scrollArray, setScrollArray] = useState<number[]>([])
const [showMobileMenuFull, setShowMobileMenuFull] = useState('')


// MOBIL VERSIYADA CLICKLENDIKDE MENU CONTENTIN GORUNMESI UCUN

const showMobileMenuF =  ()=> {
 
  if(showMobileMenuFull === '' || showMobileMenuFull === 'mobile-header-content-hide' ){
    document.body.style.overflow = 'hidden'
    setShowMobileMenuFull( 'mobile-header-content-show');
  }
  
  else {
    document.body.style.overflow = 'auto'
    setShowMobileMenuFull('mobile-header-content-hide');
  }
}




// SCROLL HADISESINDE HEADERIN IRELI GERI HEREKETINI TEMIN ETMEK UCUN
useEffect(() => {
 
 setScrollArray((item:number[]):number[]=> item.concat(scrollT))
  if(scrollArray.length > 25){
    setScrollArray((item:number[]):number[]=> item.slice(1))
  }
  if((scrollArray[0] - scrollArray[scrollArray.length-1]) > 20) {
    setScrollIsUp(false)
  }
  else if((scrollArray[0] - scrollArray[scrollArray.length-1]) < 20){
    setScrollIsUp(true)
  }
  if(scrollT === 0){
    setScrollIsUp(false)
  }
}, [scrollT])

// MOBIL VERSIYADA OLARKEN MENU KLIKLENDIKDEN SONRA WEB VERSIYAYA ARTIRILDIQDA DEFAULT FORMANI QAYTARMAQ UCUN
useEffect(() => {
  if(screenW === 'web'){
    document.body.style.overflow = 'auto'
    setShowMobileMenuFull('');
  }
}, [screenW])

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
        
        <div className='mobile-header-bottom'>
        <Link to={'/'}><img src={abbIcon} alt="" /></Link>
        <i onClick={showMobileMenuF} className="fa-solid fa-bars font-bold text-4xl cursor-pointer"></i>
        </div>
        <div className={showMobileMenuFull}>

        </div>
        
        </div>
    
   
     
  )
}

export default Header