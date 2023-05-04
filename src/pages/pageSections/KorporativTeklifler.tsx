import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const KorporativTeklifler = () => {

    const [currentPosition, setCurrentPosition] = useState(0)



function moveRightF(e:any){
    if(currentPosition + e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth > e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollWidth - e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth){
        e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollWidth - e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth
        
    }
        else  {e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = currentPosition + e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth *2/3}
        
        setCurrentPosition(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft)
       
   
    

}

function moveLeftF (e:any){
    if(currentPosition + e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth < 0){
        e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = 0;

    }
    else {e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft = currentPosition - e.currentTarget.parentNode.parentNode.parentNode.children[1].offsetWidth *2/3}

    setCurrentPosition(e.currentTarget.parentNode.parentNode.parentNode.children[1].scrollLeft)
        
    
}




    return (
        <div className='main-container'>

            <div className='flex flex-col'>

                <div className='flex flex-row justify-between m-10'>

                    <h2 onClick={()=>console.log('clicked')} className='text-3xl font-bold'>Korporativ biznes üçün təkliflər</h2>

                    <div className='font-bold text-3xl whitespace-nowrap'>
                    <i onClick={moveLeftF} className="fa-solid fa-angle-left mr-2 p-4 bg-slate-300 cursor-pointer"></i>
                    <i onClick={moveRightF} className="fa-solid fa-angle-right p-4 bg-slate-300 cursor-pointer"></i>
                    </div>

                </div>

                <div id='slider-container' className='overflow-hidden whitespace-nowrap'>
                    <div className="inline-block min-w-sm w-96 rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-1.webp'} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Kartlar</div>
                            <p className="text-gray-700 text-base">
                                ABB-dən debet və kredit, status və eksklüziv, virtual, taksit və başqa kartlar. Nağdsız ödənişlərin üstünlüklərindən faydalanın.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">

                            <Link to={'/'}>Daha ətraflı</Link>
                        </div>
                    </div>

                    <div className="inline-block min-w-sm w-96 mx-8 rounded overflow-hidden shadow-lg ">
                        <img className="w-full" src={process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-2.webp'} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Kreditlər</div>
                            <p className="text-gray-700 text-base">
                                ABB-dən hər kəs üçün sərfəli kreditlər</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link to={'/'}>Daha ətraflı</Link></div>
                    </div>

                    <div className="inline-block min-w-sm w-96 rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={process.env.PUBLIC_URL + '/images/tekliflerimiz/tekliflerimiz-3.webp'} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Xidmət ofisi və ATM-lər</div>
                            <p className="text-gray-700 text-base">
                                ABB 67 filial, 13 şöbə və 900-dən çox ATM-i ilə xidmətinizdədir. Sizə ən yaxın nöqtəmizi rahatlıqla seçin.</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link to={'/'}>Daha ətraflı</Link></div>
                    </div>

                </div>



            </div >

        </div>
    )
}

export default KorporativTeklifler