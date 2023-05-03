import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { selectScreenW } from '../../screenSlice'

// https://codepen.io/thenutz/pen/VwYeYEE

const KorporativStaticSlider1 = () => {

   const screenW = useSelector(selectScreenW)

   const slider = document.querySelector('#mobile-slider');
   
   const [isDown, setIsDown] = useState(false)

const [lastPosition, setlastPosition] = useState(0)
const [mouseDownPoint, setMouseDownPoint] = useState(0)
const [cursorXCoordinate, setCursorXCoordinate] = useState(0)


const mouseDown = (e:any) => {
   setIsDown(true)
   
   setCursorXCoordinate(e.pageX)
}

const mouseMove = (e:any) => {
if(isDown){

   e.currentTarget.scrollLeft = cursorXCoordinate - e.pageX
  
}
}

const mouseUp =(e:any) => {
 e.preventDefault()
   setIsDown(false)
// if(e.currentTarget.scrollLeft > 160){
//    e.scrollLeft = 310;
//    setlastPosition(e.currentTarget.scrollWidth)
// }
}

const mouseLeave = () => {
   setIsDown(false)
}



   return (

      <>
         {
            (screenW === 'web') ?
               <div className='grid grid-cols-2 gap-4 h-96 overflow-hidden mt-20'>
                  <div className=' bg-gray-100 h-96 flex justify-end'>
                     <div className='max-w-2xl flex h-full items-end '>
                        <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                           <div className=''>
                              <h2 className='text-2xl font-bold mb-6'>Məsafədən korporativ hesab</h2>
                              <p>Korporativ hesabınızı banka gəlmədən açın</p>
                           </div>
                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
                        </div>
                        <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/korporativ/onlayn_hesab_ac.png'} alt="" />

                     </div>
                  </div>
                  <div className=' bg-blue-100 flex h-96 '>
                     <div className='max-w-2xl h-full flex items-end'>
                        <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                           <div className=''>
                              <h2 className='text-2xl font-bold mb-6'>InternetBank</h2>
                              <p>Bir toxunuşla bankınız hər zaman yanınızda</p>
                           </div>
                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
                        </div>

                        <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/korporativ/laptop_man-01.png'} alt="" />


                     </div>
                  </div>

               </div>
               :
                  <div onMouseUp={(e)=>mouseUp(e)} onMouseLeave={mouseLeave} onMouseMove={(e)=>mouseMove(e)} onMouseDown={(e)=>mouseDown(e)} id='mobile-slider' className='relative w-full h-48 overflow-y-hidden whitespace-nowrap cursor-grab select-none overflow-hidden'>

                     <div className='inline-block w-4/5 h-48'>
                    <div className='flex w-full mr-5 h-48 justify-between items-end bg-gray-100 select-none' >
                    <div className='w-1/2 h-48  flex flex-col justify-between'>
                           <h2 className='text-sm font-bold m-6'>Məsafədən korporativ hesab</h2>

                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
                        </div>
                      
                        <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/korporativ/onlayn_hesab_ac.png'} alt="" />

                    </div>
                     </div>

                   <div className='inline-block w-4/5 h-48'>
                   <div className='flex w-full h-48 justify-between items-end bg-blue-100 select-none'>
                        <div className='w-1/2 h-48  flex flex-col justify-between'>

                           <h2 className='text-sm font-bold m-6'>InternetBank</h2>

                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
                        </div>

                        <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/korporativ/laptop_man-01.png'} alt="" />



                     </div>
                   </div>
                  </div>
         }
      </>
   )
}

export default KorporativStaticSlider1