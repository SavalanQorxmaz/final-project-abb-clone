import {Routes, Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { screenW, scrollTop, selectScreenW, selectScrollTop} from './screenSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Ferdi from './pages/mainHeaderPages/Ferdi';
import Korporotiv from './pages/mainHeaderPages/Korporotiv';
import Kob from './pages/mainHeaderPages/Kob';
import { useEffect } from 'react';
import TestSlider from './components/TestSlider';
import BackToTop from './components/BackToTop';

function App() {

  const dispatch = useDispatch()

window.addEventListener('resize', () => {
  dispatch(screenW(window.innerWidth))
})

 window.addEventListener('scroll', ()=> {
dispatch(scrollTop(document.documentElement.scrollTop))
 })
 
useEffect(()=>{
  dispatch(screenW(window.innerWidth))
},[])

const scrollT = useSelector(selectScrollTop)


 

  return (
    <div id='app' className="App">
  
<Header/>
<SearchBar/>

  <Routes>
   <Route path='/' element = {<Ferdi/>}/>
    <Route path='/korporativ' element = {<Korporotiv/>}/>
    <Route path='/kob' element = {<Kob/>}/>
    <Route path='/test' element = {<TestSlider/>}/>
   </Routes>

<Footer/>

{
  scrollT > 1000 ? <BackToTop/> : ''
}


    </div>
  );
}

export default App;
