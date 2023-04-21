import React from 'react'
import {Link} from 'react-router-dom'

const Tender = () => {
  return (
    <div className='tender'>
      <ul>
        <li>
          <Link to={'#'}>Tender elanları</Link>
        </li>
        <li>
        <Link to={'#'}>Haqqımızda</Link>
          </li>
        <li>
        <Link to={'#'}>Tariflər və standart şərtlər</Link>
        </li>
        <li>
        <Link to={'#'}>Xəbərlər</Link>
        </li>
        <li>
        <Link to={'#'}>Xidmət şəbəkəsi</Link>
        </li>
        <li>
        <Link to={'#'}>Onlayn xidmətlər</Link>
        </li>
        <li>
        <Link to={'#'}>Karyera portalı</Link>
        </li>
      </ul>
    </div>
  )
}

export default Tender