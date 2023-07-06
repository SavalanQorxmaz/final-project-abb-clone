import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const KorporativKartlar = () => {

  const slider = document.getElementById('slider')
  const [sliderReady, setSliderReady] = useState(false)

  const [frameWidth,setFrameWidth] = useState(document.getElementById('sliderFrame')?.offsetWidth)
  const [frameScrollWidth, setFrameScrollWidth] = useState(document.getElementById('sliderFrame')?.scrollWidth)
  const [frameScrollLeft, setFrameScrollLeft] = useState(0)
  const [currentPosition, setCurrentPosition] = useState(0)
  const [position, setPosition] = useState(0)
  const [stepCount, setStepCount] = useState(0)
  const [lastSlideChangeTime, setLastSlideChangeTime] = useState(Date.now)

  const [autoSlide, setAutoslide] = useState(0)

  

  

  // elementin yuklendiyini mueyyen etmek ucun, olmasa islemir
  useEffect(()=>{
    setFrameWidth(document.getElementById('slider')?.offsetWidth)
    setFrameScrollWidth(document.getElementById('slider')?.scrollWidth)
  },[document.getElementById('slider')?.offsetWidth])
// ..............................................

// addim sayini mueyyen etmek ucun
 useEffect(()=>{
  if(slider?.offsetWidth !== undefined){
    if(slider.scrollWidth % slider. offsetWidth > 0 ){
      setStepCount(slider.scrollWidth / slider. offsetWidth + 1)
    }
    else {
      setStepCount(slider.scrollWidth / slider. offsetWidth)
    }

  }

 },[document.getElementById('slider')?.offsetWidth])
// ........................................................

// istiqamet iconlarinin emrlerini icra etmek ucun

 const [direction, setDirection] = useState<'left' | 'right'>('right')

 useEffect(()=>{

 if(slider?.offsetWidth !== undefined){

direction === 'right' ?
slider.scrollLeft += slider.offsetWidth *4/5 
:
slider.scrollLeft -= slider.offsetWidth *4/5
  

 }

 }, [position])
//  .........................................

  
// istiqamet iconlarinin funksiyalari
  function moveRightF(){

  if(slider?.offsetWidth !== undefined){
    if(position < stepCount){
      setPosition(position +1)
      setDirection('right')
    }
   
  } }



function moveLeftF (e:any){
 

  if(slider?.offsetWidth !== undefined){
    if(position >=0){
      setPosition(position -1)
      setDirection('left')
    }
   
  }}

// .............................................


  return (
  <div className='slider-frame '>

    <div className='slider-header'>
      <h2 className='text-3xl text-white font-bold '>Biznes kartları</h2>

      <div>
      <i onClick={moveLeftF} className="fa-solid fa-angle-left font-bold text-3xl p-3 bg-slate-300 mr-2 cursor-pointer"></i>
      <i onClick={moveRightF} className="fa-solid fa-angle-right font bold text-3xl p-3 bg-slate-300 cursor-pointer"></i>
      </div>

    </div>
      <div id='slider'  className='slider-main'>

    <div className='slide'>
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-zinc-700 p-5">
  <img className="w-full" src={process.env.PUBLIC_URL + 'images/korporativ/card_mastercard-business-sahibkart.png'} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">VISA Business</div>
    <p className="text-gray-700 text-base">
    Biznes ödənişlərinizi Visa Business ilə rahat həyata keçirin
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
   <Link to={'/'}>Daha ətraflı</Link></div>
   
</div>
    </div>
    <div className='slide'>
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-zinc-700 p-5">
  <img className="w-full"  src={process.env.PUBLIC_URL + 'images/korporativ/card_visa-business.png'}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Mastercard Business</div>
    <p className="text-gray-700 text-base">
    Biznes xərclərinizin idarəedilməsi üçün MasterCard kartı
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link to={'/'}>Daha ətraflı</Link>
  </div>
</div>
    </div>
    <div className='slide'>
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-zinc-700 p-5">
  <img className="w-full"  src={process.env.PUBLIC_URL + 'images/korporativ/card_visa-electron-paywave-salary.png'}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">VISA Business Gold</div>
    <p className="text-gray-700 text-base">
    Kredit kartının üstünlükləri ilə qızıl debet kartı
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link to={'/'}>Daha ətraflı</Link>
   
  </div>
</div>
    </div>
    <div className='slide'>
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-zinc-700 p-5">
  <img className="w-full" src={process.env.PUBLIC_URL + 'images/korporativ/card_visa-gold.png'}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">VISA Electron PayWave Salary</div>
    <p className="text-gray-700 text-base">
İşçiləriniz üçün münasib VISA əməkhaqqı kartı
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link to={'/'}>Daha ətraflı</Link>
  </div>
</div>
    </div>
        
</div>
  </div>
  )
}

export default KorporativKartlar