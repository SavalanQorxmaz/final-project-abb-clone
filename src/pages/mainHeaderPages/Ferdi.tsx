import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { selectScreenW, selectScrollTop } from '../../screenSlice'
import { sliderClasses } from '@mui/material'

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
    return res
  })
  // .then(res=>console.log(res))
},[])



const [slider, setSlider] = useState({

  previousSlide: '',
  currentSlide: '',
  nextSlide: '',
})

const [slideClass, setSlideClass] = useState({
  
  previousSlideClass: 'current-to-previous-slide',
  currentSlideClass: 'current-slide',
  nextSlideClass: 'next-to-current-slide',
})
let ind = 1

// setInterval(()=>{

//   if (ind === sliderImg.length){
//     ind = 1
//   }

    // setSlider({
    //   currentSlide: sliderImg[ind],
    //   nextSlide: sliderImg[ind + 1],
    //   previousSlide: sliderImg[ind -1],
       
    // })

    // setSlideClass({
    //   previousSlideClass:'current-to-previous-slide',
    //   currentSlideClass: 'current-slide',
    //   nextSlideClass: 'next-to-current-slide',
    // })


  

//   ind++

// },3000)


  return (
  
<div className='my-slider'>

  <div className={slideClass.previousSlideClass}>
    <img src= {slider.previousSlide} alt="" />
    </div>
    <div className={slideClass.currentSlideClass}>
    <img src={slider.currentSlide} alt="" />
    </div>
    <div className={slideClass.nextSlideClass}>
  <img src={slider.nextSlide} alt="" />
    </div>
    
</div>
 
  )
}

export default Ferdi