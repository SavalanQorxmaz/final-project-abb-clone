import React, { CSSProperties, useEffect, useState } from 'react'
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
  const [stepCount, setStepCount] = useState(0)
  const [lastSlideChangeTime, setLastSlideChangeTime] = useState(Date.now)
  
  const requestRef = React.useRef<any>(0);
    const previousTimeRef = React.useRef(Date.now());

   
      
      React.useEffect(() => {
        const animate = () => {
            if (Date.now() - previousTimeRef.current > 8000) {
              
              setStepCount( stepCount + 1)
              
            previousTimeRef.current = Date.now();
            }
            requestRef.current = requestAnimationFrame(animate);
          }
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
      }, []); 
    
  
  
 useEffect(()=>{
   if(stepCount>0){
    if(slideDegree === -3) {
        setSlideDegree(0)
      }
      else{
        setSlideDegree(slideDegree - 1)
      }
   } 
 },[stepCount])
  
  const frameWidth = document.getElementById('sliderFrame')?.clientWidth

  const sliderFrameStyle:CSSProperties = {
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
  
  const sliderStyle:CSSProperties = {
  
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

  const coverStyle:CSSProperties = {
  
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'flex-end',
    paddingBottom: '5%', 
    position: 'absolute', 
    top: '0px',
    left: '0px',
    height: '100%', 
    width: '100%', 
  
  }



  const coverButtonStyleF = (slideNumber:number)=> {


    const coverButtonStyle:CSSProperties = {
        backgroundColor: slideNumber===slideDegree? 'rgba(0,0,0,0.8': 'rgba(200,200,200,0.8',
        height: '20px', 
        width: '20px',
        marginRight: '10px',
        borderRadius: '50%',
        cursor: 'pointer'
    
      }

      return coverButtonStyle
  }
  
  const slideStyleF = (degree:number, color:string) => {
    let translateTo:number | undefined;
    if(frameWidth){
      translateTo  = Math.ceil(frameWidth * 57.3)
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
      transform: ` rotateY(${degree}deg) translateZ(${translateTo}px)`,
      
    }
  
    return slideStyle
  }
  
  
  
    return (
    
  <>
  
  <div id='sliderFrame'  style={sliderFrameStyle}>
  
  <div style={sliderStyle}>
    <div style={slideStyleF( 0, '#D5D6E9')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[0]} alt="" />
    </div>
    <div style={slideStyleF( 1,'#D5D6E9')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[1]} alt="" />
    </div>
    <div style={slideStyleF( 2,'#D5D6E9')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[2]} alt="" />
    </div>
    <div style={slideStyleF( 3,'#D5D6E9')}>
    <div className='flex flex-col justify-evenly items-start'>
            <h2 className='text-black text-2xl text-bold font-black'>İlklərdən ol!</h2>
            <h3 className='text-xl font-semibold'>Apple Pay ilə ödənişlərini sadə, sürətli və təhlükəsiz apar</h3>
            <Link className=' p-4 border-black border-2 rounded-xl' to={'/'}>Daha etrafli</Link>
           </div>
      <img style={{width: '40%'}} src={sliderImg[3]} alt="" />
    </div>
   
  
  </div>
  <div style={coverStyle}>
    <div onClick={()=>{
        previousTimeRef.current = Date.now()
        setSlideDegree(0)

    }} style={coverButtonStyleF(0)}></div>
    <div onClick={()=>{
         previousTimeRef.current = Date.now()
        setSlideDegree(-1)

    }} style={coverButtonStyleF(-1)}></div>
    <div onClick={()=>{
         previousTimeRef.current = Date.now()
        setSlideDegree(-2)

    }} style={coverButtonStyleF(-2)}></div>
    <div onClick={()=>{
         previousTimeRef.current = Date.now()
        setSlideDegree(-3)

    }} style={coverButtonStyleF(-3)}></div>
  </div>
  
  </div>
  
  
  
  </>
   
    )
}

export default Slider