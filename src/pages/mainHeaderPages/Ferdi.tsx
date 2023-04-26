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
e.currentTarget.style.transform = `rotateY(${144}deg)`
}

setInterval(()=> {
  
  if(slideDegree === 360) {
    setSlideDegree(0)
  }
  else{
    setSlideDegree(slideDegree + 72)
  }
},8000)

  return (
  
<div className='slider-back' >
    <div onClick={rotateSliderF} className="slider"  style={{transform: `rotateY(${slideDegree}deg)`}}>
    <div className='slide first-slide' ></div>
    <div className='slide second-slide'></div>
    <div className='slide third-slide' ></div>
    <div className='slide fourth-slide'></div>
    <div className='slide fives-slide' ></div>
    </div>

     
    
</div>
 
  )
}

export default Ferdi

// style={{transform: `rotateY(${slideDegree}deg)`}}