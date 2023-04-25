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
    console.log(res)
    return res
  })
  // .then(res=>console.log(res))
},[])

const [currentSlideIndex, setCurrentSlideIndex] = useState(1)

const [currentSlide, setCurrentSlide] = useState(sliderImg[currentSlideIndex])
const [nextSlide, setNextSlide] = useState(sliderImg[currentSlideIndex + 1])
const [previousSlide, setPreviousSlide] = useState(sliderImg[currentSlideIndex - 1])









const [slideClass, setSlideClass] = useState({
  
  // previousSlideClass: 'current-to-previous-slide',
  currentSlideClass: 'current-to-previous-slide',
  nextSlideClass: 'current-slide',
})

setInterval(()=>{
setCurrentSlideIndex(currentSlideIndex + 1)


if(currentSlideIndex === 3){
  setCurrentSlideIndex(1)
}
  
}, 10000)




  return (
  
<div className='my-slider mt-40'>

  <div className={'previous-slide'}>
    <img src= {previousSlide} alt="" />
    </div>
    <div className={'current-to-previous-slide'}>
    <img src={sliderImg[currentSlideIndex]} alt="" />
    </div>
    <div className={'next-to-current-to-previous-slide'}>
  <img src={sliderImg[currentSlideIndex+1]} alt="" />
    </div>
    
</div>
 
  )
}

export default Ferdi