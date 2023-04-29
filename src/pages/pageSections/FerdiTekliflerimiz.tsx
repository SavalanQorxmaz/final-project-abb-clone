import React from 'react'
import { Link } from 'react-router-dom'

const FerdiTekliflerimiz = () => {
  return (
  <div className='pt-32 pb-32'>
    <div className='my-container '>

<h2 className='text-4xl font-bold mb-16'>Təkliflərimiz</h2>

<div className='flex mobile:flex-col mobile:items-center'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-around">
<img className="w-full" src={process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-1.webp'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Kartlar</div>
<p className="text-gray-700 text-base">
ABB-dən debet və kredit, status və eksklüziv, virtual, taksit və başqa kartlar. Nağdsız ödənişlərin üstünlüklərindən faydalanın.</p>
</div>
<div className="px-6 pt-4 pb-2">

<Link to={'/'}>Daha ətraflı</Link>
</div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg mobile:my-8 web:mx-5 flex flex-col justify-around">
<img className="w-full" src= {process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-2.webp'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Kreditlər</div>
<p className="text-gray-700 text-base">
ABB-dən hər kəs üçün sərfəli kreditlər</p>
</div>
<div className="px-6 pt-4 pb-2">
<Link to={'/'}>Daha ətraflı</Link></div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-around">
<img className="w-full" src= {process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-3.webp'} alt="Sunset in the mountains"/>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Xidmət ofisi və ATM-lər</div>
<p className="text-gray-700 text-base">
ABB 67 filial, 13 şöbə və 900-dən çox ATM-i ilə xidmətinizdədir. Sizə ən yaxın nöqtəmizi rahatlıqla seçin.</p>
</div>
<div className="px-6 pt-4 pb-2">
<Link to={'/'}>Daha ətraflı</Link></div>
</div>
</div>
</div>
  </div>
  )
}

export default FerdiTekliflerimiz