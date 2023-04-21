import React from 'react'
import {useSelector} from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import Credit from './headerGroups/Credit'
import AbbIcon from './headerGroups/AbbIcon'

const HeaderBottom = () => {

  const screenW = useSelector(selectScreenW)
  return (
    <div className='header-bottom'>
      {screenW === 'web' ? <Credit/> : <AbbIcon/>}
    </div>
  )
}

export default HeaderBottom