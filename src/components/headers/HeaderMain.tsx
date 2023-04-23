import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import { selectScrollTop } from '../../screenSlice'
import { selectSelectedLink,selectedLink } from '../../slices/headerSlice'
import abbIcon from '../../icons/logo.svg'
import internetBankingIcon  from '../../icons/internet-banking-signin.svg'
import Search from './headerGroups/Search'

const HeaderMain = () => {
  const dispatch = useDispatch()
  const screenW = useSelector(selectScreenW)
  const scrollTop = useSelector(selectScrollTop)
  const selectedL = useSelector(selectSelectedLink)
  const [clientTypeSelected, setClientTypeSelected] = useState(
    <Link to={'/'}>Fərdi</Link>,
  )
  const [whichClientStyleChange, setWhichClientStyleChange] = useState< 1 | 2| 3 >(1)

  const [showClientTypes, setShowClientTypes] = useState(false)

 
useEffect(()=>{

  switch(selectedL){
    case 'ferdi': setClientTypeSelected(<Link to={'/'}>Fərdi</Link>);
    break;
    case 'korporativ' : setClientTypeSelected(<Link to={'/'}>Korporativ</Link>);
    break;
    case 'kob' : setClientTypeSelected(<Link to={'/'}>KOB</Link>);
    break;
    default : setClientTypeSelected(<Link to={'/'}>Fərdi</Link>);
  }

}, [selectedL])


useEffect(()=>{
setShowClientTypes(false)
},[scrollTop])

  document.body.addEventListener('click', (e:any) => {
  
    if(showClientTypes){
   if((!e.target.classList.contains('mobile-client-type-cover'))){
   
      setShowClientTypes(false)
    }
  }
})

const showClientTypesF = () => {
  setShowClientTypes(!showClientTypes)
}

  
  return (
 <>
 {
    screenW === 'web' ?  <div className='header-main-back'>
    <div className='my-container'>
    <div className='header-main'>
    <div className='header-main-left'>
    <Link to={'/'}><img src={abbIcon} alt="" style={{height:'50px', marginRight: '40px'}}  /></Link>
    <Link onClick={()=>{
      dispatch(selectedLink('ferdi'))
        }} className= { (selectedL === 'ferdi') ? 'header-main-left-selected' : ''} to={'/'}>Fərdi</Link>&nbsp; &nbsp;/&nbsp;&nbsp;
    <Link onClick={()=>{
      dispatch(selectedLink('korporativ'))
        }} className= { (selectedL === 'korporativ') ? 'header-main-left-selected' : ''} to={'/'}>Korporativ</Link>&nbsp; &nbsp;/&nbsp;&nbsp;
    <Link onClick={()=>{
      dispatch(selectedLink('kob'))
        }} className= { (selectedL === 'kob') ? 'header-main-left-selected' : ''} to={'/'}>KOB</Link>
    </div>
    <Link className='header-main-right' to={'/'}><img  src={internetBankingIcon} alt="" />&nbsp;<span>Internet Bankçılıq</span></Link>
   
    </div>
    </div>
  </div> : 
  <>
  <div className='mobile-client-type'>
    <div className='mobile-client-type-selected'>{clientTypeSelected} &nbsp; <i className= {showClientTypes ? "fa-solid fa-chevron-down rotated-icon" : "fa-solid fa-chevron-down default-icon"} ></i></div>
    <div className={showClientTypes? 'mobile-client-type-others' : 'mobile-client-type-others display-none'}>
      <div className='mobile-client-type-others-protrusion'></div>
      <div onClick={()=>{
        dispatch(selectedLink('ferdi'))
        }} 
        className = {(selectedL === 'ferdi') ? 'mobile-client-type-others-selected' : ''}>
          <Link to={'/'}>Fərdi</Link></div>
      <div onClick={()=>{
        dispatch(selectedLink('korporativ'))
        }} 
        className = {(selectedL === 'korporativ') ? 'mobile-client-type-others-selected' : ''}>
          <Link to={'/'}>Korporativ</Link></div>
      <div onClick={()=>{
        dispatch(selectedLink('kob'))
        }} 
        className = {(selectedL === 'kob') ? 'mobile-client-type-others-selected' : ''}>
          <Link to={'/'}>KOB</Link></div>
    </div>
    <div  onClick={showClientTypesF} className='mobile-client-type-cover'></div>
  </div>
  <Search/>
  </>
 }
 </>
  )
}

export default HeaderMain