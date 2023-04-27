import React from 'react'

const FerdiSadeKecidler = () => {
  return (
    <div className='w-4/5 m-auto border-4 border-red-300 p-4 flex justify-around '>

      <div className='border-2 border-red-500'>
      <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-1.webp'} alt="" />
      </div>
      <div className='border-2 border-red-500'>
      <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-2.webp'} alt="" />
        </div>
      <div className='border-2 border-red-500'>
      <img src={process.env.PUBLIC_URL + '/images/sadekecidler/sade-kecidler-3.webp'} alt="" />
      </div>

    </div>
  )
}

export default FerdiSadeKecidler