import React from 'react'
import {useSelector} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import AbbIcon from './headerGroups/AbbIcon'
import Private from './headerGroups/Private'
import InternetBanking from './headerGroups/InternetBanking'
import Search from './headerGroups/Search'

const HeaderMain = () => {
  const screenW = useSelector(selectScreenW)
  return (
    <div className='header-main'>
      {screenW === 'web' ? <><AbbIcon/><Private/><InternetBanking/></> : <><Private/><Search/></>}
    </div>
  )
}

export default HeaderMain