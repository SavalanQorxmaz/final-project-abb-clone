import React, {useState, useRef, useEffect} from 'react'

import { useSelector } from 'react-redux'
import { selectScreenW } from '../../screenSlice'

const KobStaticSlider = () => {

    const screenW = useSelector(selectScreenW)
    const [mouseDown, setMouseDown] = useState(false)
    const mousePositionRef = useRef(0)
    const scrollPositionRef = useRef(0)
    const [sliderChangerActive, setSliderChangerActive] = useState<'1' | '2'>('1')
    const slider = document.getElementById('slider')

   //  const mouseUpF =(e:any) => {

   //    setMouseDown(false)
  
   //  }
  
   //  const mouseMoveF =(e:any) => {
   //    if(mouseDown){
   //      e.currentTarget.scrollLeft += (mouseMoveRef.current - e.pageX) *2
   //    }
   //  }
  
   //  const moveRightF = ()=>{
  
   //    if(slider?.scrollLeft !== undefined && slider?.scrollLeft !== null){
  
   //      slider.scrollLeft = slider.offsetWidth
   //      setActiveChanger('2')
   //    }
   //  }
   //  const moveLeftF = ()=>{
  
   //    if(slider?.scrollLeft !== undefined && slider?.scrollLeft !== null){
  
   //      slider.scrollLeft = 0
   //      setActiveChanger('1')
   //    }
   //  }


    const mouseDownF = (e:any) => {
            setMouseDown(true);
        mousePositionRef.current = e.clientX
        scrollPositionRef.current = e.currentTarget.scrollLeft
        
    }

    const mouseMoveF = (e:any) => {
       if(mouseDown){
         e.currentTarget.scrollLeft += (scrollPositionRef.current - e.pageX) *2
    
       }
    }

    const mouseUpF = (e:any)=> {

        if(Math.abs(mousePositionRef.current - e.currentTarget.scrollLeft ) > e.currentTarget.offsetWidth / 2){
            e.currentTarget.scrollLeft = e.currentTarget.offsetWidth
            setSliderChangerActive('2')
        }
        else {
            e.currentTarget.scrollLeft = 0
            setSliderChangerActive('1')
        }
        setMouseDown(false)

    }

  


    const moveRightF = () => {
        setSliderChangerActive('1')
    }
    const moveLeftF = () => {
        setSliderChangerActive('2')
    }

    useEffect(()=>{
        if(slider){
            sliderChangerActive === '1' ? slider.scrollLeft = 0 : slider.scrollLeft = slider.offsetWidth

        }


    }, [sliderChangerActive])

  return (
    <>
    {
        screenW === "web" ?

        <div className='grid grid-cols-2 gap-4 h-96 overflow-hidden mt-20'>
        <div className=' bg-gray-100 h-96 flex justify-end'>
           <div className='max-w-2xl flex h-full items-end '>
              <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                 <div className=''>
                    <h2 className='text-2xl font-bold mb-6'>Fayda və Dəstək</h2>
                    <p>Sahibkarlar klubu ilə dəstəyimizdən faydalanın</p>
                 </div>
                 <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
              </div>
              <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/kob/sahibkarlar_klubu.png'} alt="" />

           </div>
        </div>
        <div className=' bg-blue-100 flex h-96 '>
           <div className='max-w-2xl h-full flex items-end'>
              <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
                 <div className=''>
                    <h2 className='text-2xl font-bold mb-6'>Sahibkart</h2>
                    <p>Biznes ödənişlərinizi Sahibkart ilə edin</p>
                 </div>
                 <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
              </div>

              <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/kob/sahibkart.png'} alt="" />


           </div>
        </div>

     </div>
        :
       <div className='my-12'>
         <div id='slider' onMouseDown={mouseDownF} onMouseMove={mouseMoveF} onMouseUp= {mouseUpF} className='w-full h-48 whitespace-nowrap overflow-hidden cursor-grab'>

            <div className='w-4/5 h-full inline-block mr-4'>
            <div className='flex w-full h-48 justify-between items-end bg-blue-100 select-none'>
                        <div className='w-1/2 h-48  flex flex-col justify-between'>

                           <h2 className='text-sm font-bold m-6'>Fayda və Dəstək</h2>

                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
                        </div>

                        <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/kob/sahibkarlar_klubu.png'} alt="" />



                     </div>

            </div>

            <div className='w-4/5 h-full inline-block'>
            <div className='flex w-full h-48 justify-between items-end bg-blue-100 select-none'>
                        <div className='w-1/2 h-48  flex flex-col justify-between'>

                           <h2 className='text-sm font-bold m-6'>SahibKart</h2>

                           <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
                        </div>

                        <img className='object-contain h-full select-none' src={process.env.PUBLIC_URL + 'images/kob/sahibkart.png'} alt="" />



                     </div>
            </div>

</div>
<div className='w-full h-12 flex items-center justify-center'>

<div onClick={moveLeftF} className={sliderChangerActive === '1' ? 'w-8 h-1 bg-black rounded-sm cursor-pointer m-2 duration-300' : 'w-8 h-1 bg-gray-50 rounded-sm cursor-pointer m-2 duration-300'}></div>
<div onClick={moveRightF} className={sliderChangerActive === '2' ? 'w-8 h-1 bg-black rounded-sm cursor-pointer m-2 duration-300' : 'w-8 h-1 bg-gray-50 rounded-sm cursor-pointer m-2 duration-300'}></div>
</div>
       </div>
    }
    
    </>
  )
}

export default KobStaticSlider