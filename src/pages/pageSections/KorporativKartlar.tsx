import React, {useEffect, useState} from 'react'

const KorporativKartlar = () => {

  const frameWidth = document.getElementById('sliderFrame')?.clientWidth
  const [currentPosition, setCurrentPosition] = useState(0)
  const [stepCount, setStepCount] = useState(0)
  const [lastSlideChangeTime, setLastSlideChangeTime] = useState(Date.now)


  function timerF(){
    if (Date.now() - lastSlideChangeTime > 8000) {
      setStepCount(stepCount + 1)
      setLastSlideChangeTime(Date.now)
  }
  requestAnimationFrame(timerF) 
  }
  requestAnimationFrame(timerF) 

  useEffect(()=>{
    if(stepCount>0){
     if(currentPosition === 2) {
         setCurrentPosition(0)
       }
       else{
         setCurrentPosition(currentPosition +1)
       }
    } 
  },[stepCount])

  

  function moveRightF(e:any){
    if(currentPosition + e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth > e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollWidth - e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth){
        e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollWidth - e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth
        
    }
        else  {e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft += e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth *4/5}
        
        setCurrentPosition(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft)
       
    console.log(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft)
    

}

function moveLeftF (e:any){

  console.log(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollWidth)
    if(currentPosition + e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth < 0){
        e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = 0;

    }
    else {e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft -= e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth *4/5}

    setCurrentPosition(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft)
        console.log(currentPosition)
    
}
  return (
  <div id='sliderFrame' className='slider-frame'>

    <div className='slider-header'>
      <h2 className='text-3xl font-bold'>baslig</h2>

      <div>
      <i onClick={moveLeftF} className="fa-solid fa-angle-left font-bold text-3xl p-4 bg-slate-300 mr-2 cursor-pointer"></i>
      <i onClick={moveRightF} className="fa-solid fa-angle-right font bold text-3xl p-4 bg-slate-300 cursor-pointer"></i>
      </div>

    </div>
      <div className='slider-main'>

    <div className='slide'>1</div>
    <div className='slide'>2</div>
    <div className='slide'>3</div>
    <div className='slide'>4</div>
    <div className='slide'>5</div>
    <div className='slide'>6</div>
    <div className='slide'>7</div>
        
</div>
  </div>
  )
}

export default KorporativKartlar