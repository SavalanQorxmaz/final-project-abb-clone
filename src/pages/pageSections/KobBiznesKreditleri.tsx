import React from 'react'
import { Link } from 'react-router-dom'

const KobBiznesKreditleri = () => {
  return (
   <div className='my-20'>
     <div className='my-container'>
        <h2 className='text-3xl font-bold mb-10'>Biznes kreditləri</h2>

        <ul className=''>

            <li className='h-12 mb-5 flex items-start justify-between border-b-2 border-gray-200'>
                <span>Əmanət təminatlı kredit</span>
            <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
                <i className="fa-solid fa-angle-right"></i>
            </Link>
            </li>

            <li className='h-12 mb-5 flex items-start justify-between border-b-2 border-gray-200'>
                <span>İnvoysların maliyyələşdirilməsi</span>
            <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
                <i className="fa-solid fa-angle-right"></i>
            </Link>
            </li>

            <li className='h-12 mb-5 flex items-start justify-between border-b-2 border-gray-200'>
                <span>E-COM və E-POS terminal kredit xətti</span>
            <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
            </li>


        </ul>
    </div>
   </div>
  )
}

export default KobBiznesKreditleri