import React from 'react'
import { Link } from 'react-router-dom'

const KobSenedliEmeliyyatlar = () => {
  return (
    <div className='my-10'>
        <div className='my-container'>

            <h2 className='text-3xl font-bold my-5'>Sənədli əməliyyatlar</h2>

            <div className=' flex web:flex-row mobile:flex-col'>
                <div className='flex justify-between items-center w-1/3 mobile:w-full'>
                <div className='w-1/4 mobile:hidden'>
                <div className='w-16 h-16 rounded-full border-2 border-blue-950 flex items-center justify-center'>
                <i className="fa-solid fa-book"></i>
                </div>
                </div>
                <div className='w-3/4 [&>*]:my-3 text-sm'>
                    <h3 className='text-2xl font-semibold'>Akkreditiv</h3>
                    <p >Beynəlxalq hesablaşmaların ən təhlükəsiz və təminatlı forması</p>
                    <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
                </div>
                </div>
                <div className='flex justify-between items-center w-1/3 mobile:w-full'>
                <div className='w-1/4 mobile:hidden'>
                <div className='w-16 h-16 rounded-full border-2 border-blue-950 flex items-center justify-center'>
                <i className="fa-solid fa-book"></i>
                </div>
                </div>
                <div className='w-3/4 [&>*]:my-3 text-sm'>
                    <h3 className='text-2xl font-semibold'>Qarantiya</h3>
                    <p >Tərəfdaşlar arasında öhdəliklərin yerinə yetirilməsinə zəmanət</p>
                    <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
                </div>
                </div>
                <div className='flex justify-between items-center w-1/3 mobile:w-full'>
                <div className='w-1/4 mobile:hidden'>
                <div className='w-16 h-16 rounded-full border-2 border-blue-950 flex items-center justify-center'>
                <i className="fa-solid fa-book"></i>
                </div>
                </div>
                <div className='w-3/4 [&>*]:my-3 text-sm'>
                    <h3 className='text-2xl font-semibold'>İnkasso</h3>
                    <p >İxrac və ya idxal edən müştərilərimiz üçün rahat hesablaşma növü</p>
                    <Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
                </div>
                </div>
            </div>

      

        </div>
    </div>
  )
}

export default KobSenedliEmeliyyatlar