import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { selectScreenW, selectScrollTop } from '../screenSlice'

const Slider = () => {
    const s =useSelector(selectScreenW)
    const st = useSelector(selectScrollTop)
  
  
  // SLIDER SEKILLERININ ALINMASI 
  const [sliderImg, setSliderImg] = useState<string[]>([])
  
  useEffect(()=>{
    axios.get('http://localhost:4000/getSliderArray')
    .then(res=>res.data)
    .then(res=>{
      setSliderImg(res)
      // console.log(res)
      return res
    })
    // .then(res=>console.log(res))
  },[])
  
  const [slideDegree, setSlideDegree] = useState(0)
  
  const rotateSliderF = (e:any)=>{
  e.currentTarget.style.transform = `rotateY(${144}deg)`
  }
  
  const [animation, setAnimation] = useState(true)
  
  let autoSlide:number
  const [autoslideState, setAutoSlideState] =  useState(1)
  
  
  const sliderF = ()=> {
    
    var now;
    var then = Date.now();
    var interval = 5000;
    var delta;
  
    function autoSlideF(){
      
      now = Date.now();
      delta = now - then;
  
      if (delta > interval) {
        if(slideDegree === -3) {
          setSlideDegree(0)
        }
        else{
          setSlideDegree(slideDegree - 1)
        } 
    }
    autoSlide = requestAnimationFrame(autoSlideF) 
    }
    
    
    requestAnimationFrame(autoSlideF)
  
    
  }
  sliderF()
  
  
  
  
  const frameWidth = document.getElementById('sliderFrame')?.clientWidth
  const sliderFrameStyle:any = {
    display: 'flex',
     justifyContent: 'center',
      alignItems: 'center', 
      position: 'relative',
      margin: 'auto',
       height: '500px', 
       width: `${frameWidth}`, 
       backgroundColor: 'white',
      //  border: '3px solid black',
       transformStyle: 'preserve-3d', 
      //  backfaceVisibility: 'inherit', 
    overflow: 'hidden',
      }
  
  const sliderStyle:any = {
  
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative', 
    transform: `rotateY(${slideDegree}deg)`, 
    height: '100%', 
    transformStyle: 'preserve-3d', 
    // backfaceVisibility: 'inherit', 
    transition: '1s', 
    width: '10px',
  
  }
  
  const slideStyleF = (degree:number, color:string) => {
    let translateWidth:number | undefined;
    if(frameWidth){
      translateWidth  = Math.ceil(frameWidth * 57.3)
    }
    const slideStyle:any = {
      position: 'absolute',
      // backfaceVisibility: 'inherit',
      display: 'flex',  
    justifyContent: 'space-around', 
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px',
      width: `${frameWidth}px`,
      height: '100%',
      backgroundColor: `${color}`,
      transform: ` rotateY(${degree}deg) translateZ(${translateWidth}px)`,
      
    }
  
    return slideStyle
  }
  
  
  
    return (
    
  <>
  
  
  <div id='sliderFrame'  style={sliderFrameStyle}>
  
  <div style={sliderStyle}>
    <div style={slideStyleF( 0, 'green')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[0]} alt="" />
    </div>
    <div style={slideStyleF( 1,'red')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[1]} alt="" />
    </div>
    <div style={slideStyleF( 2,'blue')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[2]} alt="" />
    </div>
    <div style={slideStyleF( 3,'yellow')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[3]} alt="" />
    </div>
   
  
  </div>
  
  
  </div>
  
  
  
  </>
   
    )
}

export default Slider