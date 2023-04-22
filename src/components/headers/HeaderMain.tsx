import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import Search from './headerGroups/Search'
import abbIcon from '../../icons/logo.svg'
import internetBankingIcon  from '../../icons/internet-banking-signin.svg'

const HeaderMain = () => {
  const screenW = useSelector(selectScreenW)
  return (
    <div className='header-main-back'>
      <div className='my-container'>
      <div className='header-main'>
      {screenW === 'web' ? <>
      <div className='header-main-left'>
      <Link to={'/'}><img src={abbIcon} alt="" style={{height:'50px', marginRight: '40px'}}  /></Link>
      <Link to={'/'}>Fərdi</Link>&nbsp; &nbsp;/&nbsp;&nbsp;
      <Link to={'/'}>Korporativ</Link>&nbsp; &nbsp;/&nbsp;&nbsp;
      <Link to={'/'}>KOB</Link>
      </div>
      <Link className='header-main-right' to={'/'}><img  src={internetBankingIcon} alt="" />&nbsp;<span>Internet Bankçılıq</span></Link>
      
      </> : <>
      <Search/>
      </>}
      </div>
      </div>
    </div>
  )
}

export default HeaderMain