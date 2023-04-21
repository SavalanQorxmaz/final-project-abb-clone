import React from 'react'
import Tender from './headerGroups/Tender'
import Search from './headerGroups/Search'


const HeaderTop = () => {

 
  return (
    <div className='header-top-back'>
      <div className='my-container'>
     <div className='header-top'>
     <Tender/>
      <Search/>
     </div>
      </div>
    </div>
  )
}

export default HeaderTop