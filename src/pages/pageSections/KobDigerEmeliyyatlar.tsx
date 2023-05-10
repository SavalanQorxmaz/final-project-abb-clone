import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectScreenW } from '../../screenSlice'

const KobDigerEmeliyyatlar = () => {

    const screenW = useSelector(selectScreenW)
  return (
    <div className='my-10 '>
        <div className='my-container'>

            <h2 className='text-3xl font-semibold my-5'>Digər əməliyyatlar</h2>
            <div className= {screenW === 'web' ? 'flex justify-center' : "block whitespace-nowrap px-8 overflow-x-auto"}>
    <div className= {screenW === 'web' ? "w-1/3 rounded overflow-hidden shadow-lg mr-3 flex flex-col justify-around" : 'inline-block w-full m-5'}>
<img className= {screenW === 'web' ? "w-full h-72" : 'w-full h-64 object-cover '} src= {process.env.PUBLIC_URL + '/images/kob/Hesablar.png'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Hesablar</div>
<p className="text-gray-700 text-base">ABB korporativ müştərilər üçün cari hesabların idarə edilməsi və kassa əməliyyatlarının aparılması imkanını yaradır.</p>
</div>
<div className="px-6 pt-4 pb-2">

<Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
</div>
</div>

<div className= {screenW === 'web' ? "w-1/3 rounded overflow-hidden shadow-lg mx-3 flex flex-col justify-around" : 'inline-block w-full m-5'}>
<img className= {screenW === 'web' ? "w-full h-72" : 'w-full h-64 object-cover '} src= {process.env.PUBLIC_URL + '/images/kob/kocurme.png'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Köçürmələr</div>
<p className="text-gray-700 text-base">
ABB korporativ müştərilərə sərfləri şərtlərlə bankdaxili, ölkədaxili və xaricə köçürmə xidmətlərini təklif edir.</p>
</div>
<div className="px-6 pt-4 pb-2">
<Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
</div>
</div>

<div className= {screenW === 'web' ? "w-1/3 rounded overflow-hidden shadow-lg ml-3 flex flex-col justify-around" : 'inline-block w-full m-5'}>
<img  className= {screenW === 'web' ? "w-full h-72" : 'w-full h-64 object-cover '} src= {process.env.PUBLIC_URL + '/images/kob/ebankciliq.png'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Elektron bankçılıq</div>
<p className="text-gray-700 text-base">Elektron bankçılıq xidmətləri vasitəsilə Siz qısa zaman ərzində bütün lazımi bank əməliyyatlarını müvəffəqiyyətlə həyata keçirə bilərsiniz.</p>
</div>
<div className="px-6 pt-4 pb-2">
<Link to={'/'} className = ' hover:text-blue-700 hover:cursor-pointer'>
                <span>Daha ətraflı</span>&nbsp;&nbsp;
             <i className="fa-solid fa-angle-right"></i>
            </Link>
</div>
</div>
</div>
        </div>
    </div>
  )
}

export default KobDigerEmeliyyatlar