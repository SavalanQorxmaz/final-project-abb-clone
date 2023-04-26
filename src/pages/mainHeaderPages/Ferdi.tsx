import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { selectScreenW, selectScrollTop } from '../../screenSlice'

const Ferdi = () => {

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
e.currentTarget.style.transform = `rotateY(${slideDegree}deg)`
}

// setInterval(()=> {
  
//   if(slideDegree === 360) {
//     setSlideDegree(0)
//   }
//   else{
//     setSlideDegree(slideDegree + 72)
//   }
// },3000)

  return (
  
<div className='slider-back' >
    <div onClick={rotateSliderF} className="slider" style={{transform: `rotateY(${slideDegree}deg)`}} >
    <div className='slide first-slide' style={{minWidth: `${window.innerWidth}px`,transform: `translateZ(${window.screen.width/2}px)`}}></div>
    <div className='slide second-slide' style={{minWidth: `${window.innerWidth}px`,transform: `translateZ(${window.innerWidth/2}px) rotateY(72deg)`}}></div>
    <div className='slide third-slide' style={{minWidth: `${window.innerWidth}px`,transform: `translateZ(${window.innerWidth/2}px) rotateY(144deg)`}}></div>
    <div className='slide fourth-slide' style={{minWidth: `${window.innerWidth}px`,transform: `translateZ(${window.innerWidth/2}px) rotateY(-144deg)`}}></div>
    <div className='slide fives-slide' style={{minWidth: `${window.innerWidth}px`,transform: `translateZ(${window.innerWidth/2}px) rotateY(-72deg)`}}></div>
    </div>

    <div className='w-full h-48 bg-slate-500 hover:transition-all hover:h-56 hover:duration-500 '>
      
    </div>
    
</div>
 
  )
}

export default Ferdi