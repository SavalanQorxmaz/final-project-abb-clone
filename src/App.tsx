import {Routes, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { screenW, scrollTop} from './screenSlice';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Ferdi from './pages/mainHeaderPages/Ferdi';
import Korporotiv from './pages/mainHeaderPages/Korporotiv';
import Kob from './pages/mainHeaderPages/Kob';
import InternetBankciliq from './pages/mainHeaderPages/InternetBankciliq';

function App() {

  const dispatch = useDispatch()

window.addEventListener('resize', () => {
  dispatch(screenW(window.innerWidth))
})

 window.addEventListener('scroll', ()=> {
dispatch(scrollTop(document.documentElement.scrollTop))
 })
 


 

  return (
    <div className="App">
  
<Header/>
<SearchBar/>
  <Routes>
    
    <Route path='/' element = {<Ferdi/>}/>
    <Route path='/korporotiv' element = {<Korporotiv/>}/>
    <Route path='/kob' element = {<Kob/>}/>
    <Route path='/internet-banking' element = {<InternetBankciliq/>}/>
  </Routes>
    </div>
  );
}

export default App;
