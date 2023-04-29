import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

import { selectScreenW } from '../../screenSlice'

const FerdiSadeKecidler = () => {

  
const screenW = useSelector(selectScreenW)
  return (
    <div className='my-container'>
    
    <h2 className='text-3xl font-bold mb-5 mt-5'>Sadə keçidlər</h2>

      <div className='sade-kecidler flex'>
      <div className='card-sade-kecidler rounded-md  bg-gray-200 h-48 overflow-hidden flex justify-between'>
        <div className='flex flex-col justify-between p-5 pr-0'>
          <div>
          <h3 className='text-md font-semibold mb-1'>Nağd pul krediti</h3>
          <p className='text-sm leading-4'>Bütün ehtiyaclarınız üçün 35 000 AZN-dək nağd pul krediti</p>
          </div>
          <div><Link className='bg-blue-600 p-3 rounded-md' to={'/'}>Kredit alın</Link></div>
        </div>
      <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-1.webp'} alt="" />
      </div>

      <div className='card-sade-kecidler rounded-md bg-gray-200 h-48 overflow-hidden flex justify-between'>
        <div className='flex flex-col justify-between p-5 pr-0'>
          <div>
          <h3 className='text-md font-semibold mb-1'>TamKart</h3>
          <p className='text-sm leading-4'>Hər kəs üçün 24 ayadək hissəli ödəniş imkanı olan faizsiz taksit kartı</p>
          </div>
          <div><Link className='bg-blue-600 p-3 rounded-md' to={'/'}>Sifariş edin</Link></div>
        </div>
        <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-2.webp'} alt="" />
      </div>

      <div className='card-sade-kecidler rounded-md bg-gray-200 h-48 overflow-hidden flex justify-between'>
        <div className='flex flex-col justify-between p-5 pr-0'>
          <div>
          <h3 className='text-md font-semibold mb-1'>ABB mobile</h3>
          <p className='text-sm'>İstədiyin yerdən bank xidmətlərini rahatlıqla idarə edə bildiyin sadə və sürətli mobil tətbiq</p>
          </div>
          <div><Link className='bg-blue-600 p-3 rounded-md' to={'/'}>Tətbiqi yükləyin</Link></div>
        </div>
        <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-3.webp'} alt="" />
      </div>

      </div>

    </div>
  )
}

export default FerdiSadeKecidler