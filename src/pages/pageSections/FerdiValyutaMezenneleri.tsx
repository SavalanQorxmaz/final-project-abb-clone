import React from 'react'
import { Link } from 'react-router-dom'

const FerdiValyutaMezenneleri = () => {
  return (
    <div className='main-container'>
        <h2 className='text-4xl font-bold my-10'>Valyuta məzənnələri</h2>

        <div className='flex web:flex-row mobile:flex-col'>
          <div className='web:w-3/5 mobile:w-full' >
          <div className='web:w-3/5  flex'>
               <div className='w-1/3'>
                <h4 className='my-5'>Valyuta</h4>
               <ul>
                    <li className='text-3xl font-bold mb-5'>USD</li>
                    <li className='text-3xl font-bold mb-5'>EUR</li>
                    <li className='text-3xl font-bold mb-5'>RUB</li>
                </ul>
               </div>
               <div className='w-1/3'>
                <h4 className='my-5'>Satış</h4>
               <ul>
                    <li className='text-3xl  mb-5'>1.7020</li>
                    <li className='text-3xl  mb-5'>1.9101</li>
                    <li className='text-3xl  mb-5'>0.0240</li>
                </ul>
               </div>
               <div className='w-1/3'>
                <h4 className='my-5'>Alış</h4>
               <ul>
                    <li className='text-3xl  mb-5'>1.6970</li>
                    <li className='text-3xl  mb-5'>1.8164</li>
                    <li className='text-3xl  mb-5'>0.0178</li>
                </ul>
               </div>
               
            </div>
            <p className='my-5 '><span className='mr-5'>Son yenilənmə: 28.04.2023</span>
            <Link to={'/'}>Bütün valyuta məzənnələri</Link>
            </p>
          </div>
            <div className='web:w-2/5 mobile:w-full'>
                <h3 className='text-2xl font-semibold my-5'>Valyuta konvertoru</h3>
                <div className='h-20 mb-5 flex items-center outline-none'><input type="text" placeholder='Satiram' /><span className='text-2xl'>USD</span></div>
                <div className='h-20 mb-5 flex items-center outline-none'><input type="text" placeholder='Aliram' /><span className='text-2xl'>AZN</span></div>
            </div>
        </div>
    </div>
  )
}

export default FerdiValyutaMezenneleri