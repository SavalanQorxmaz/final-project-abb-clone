import React from 'react'
import { useSelector } from 'react-redux'
import { selectScreenW } from '../../screenSlice'
import { Link } from 'react-router-dom'

const FerdiStaticSlider = () => {

    const screenW = useSelector(selectScreenW)
  return (
    <>
    {
       (screenW === 'web') ?
          <div className='grid grid-cols-2 gap-4 h-96 overflow-hidden mt-20'>
             <div className=' bg-gray-100 h-96 flex justify-end'>
                <div className='max-w-2xl flex h-full items-end '>
                   <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                      <div className=''>
                         <h2 className='text-2xl font-bold mb-6'>Innovativ ideyalarınızı ABB İnnovasiya Mərkəzi ilə reallaşdırın</h2>
                      </div>
                      <div className="px-6 pt-4 pb-2 flex items-center">
                    <Link to={'/'}>Daha ətraflı</Link>
                    <i className="fa-solid fa-chevron-right text-2xl hover:text-blue-700 hover:cursor-pointer m-2"></i>
                    </div>
                   </div>
                   <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/static-slider/ibalink1.webp'} alt="" />

                </div>
             </div>
             <div className=' bg-blue-100 flex h-96 '>
                <div className='max-w-2xl h-full flex items-end'>
                   <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                      <div className=''>
                         <h2 className='text-2xl font-bold mb-6'>ABB Link-lə 2 günə virtual POS-terminal sahibi olun</h2>
                      </div>
                        <div className="px-6 pt-4 pb-2 flex items-center">
                    <Link to={'/'}>Daha ətraflı</Link>
                    <i className="fa-solid fa-chevron-right text-2xl hover:text-blue-700 hover:cursor-pointer m-2"></i>
                    </div>
                   </div>

                   <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/static-slider/ibainnovation.webp'} alt="" />


                </div>
             </div>

          </div>
          :
             <div id='mobile-slider' className='relative w-full h-48 whitespace-nowrap cursor-grab select-none overflow-hidden mt-20'>

                <div className='inline-block w-4/5 h-48'>
               <div className='flex w-full mr-5 h-48 justify-between items-end bg-gray-100 select-none' >
               <div className='w-1/2 h-48  flex flex-col justify-between'>
                      <h2 className='text-sm font-bold m-6'>Innovativ ideyalarınızı ABB İnnovasiya Mərkəzi ilə reallaşdırın</h2>
                      <div className="px-6 pt-4 pb-2 flex items-center">
                    <Link to={'/'}>Daha ətraflı</Link>
                    <i className="fa-solid fa-chevron-right text-2xl hover:text-blue-700 hover:cursor-pointer m-2"></i>
                    </div>
                   </div>
                 
                   <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/static-slider/ibalink1.webp'} alt="" />

               </div>
                </div>

              <div className='inline-block w-4/5 h-48'>
              <div className='flex w-full h-48 justify-between items-end bg-blue-100 select-none'>
                   <div className='w-1/2 h-48  flex flex-col justify-between'>

                      <h2 className='text-sm font-bold m-6'>ABB Link-lə 2 günə virtual POS-terminal sahibi olun</h2>

                      <div className="px-6 pt-4 pb-2 flex items-center">
                    <Link to={'/'}>Daha ətraflı</Link>
                    <i className="fa-solid fa-chevron-right text-2xl hover:text-blue-700 hover:cursor-pointer m-2"></i>
                    </div>
                   </div>

                   <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/static-slider/ibainnovation.webp'} alt="" />



                </div>
              </div>
             </div>
    }
 </>
  )
}

export default FerdiStaticSlider