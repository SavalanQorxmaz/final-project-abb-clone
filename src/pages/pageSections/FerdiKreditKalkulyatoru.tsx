import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { purple } from '@mui/material/colors';

import Typography from '@mui/material/Typography';
import { Value } from 'sass';

const FerdiKreditKalkulyatoru = () => {

    const [amount, setAmount] = useState(1000)
    const [period, setPeriod] = useState(6)
    const [percentage, setPercentage] = useState(13)
    const [paymentPerMonth, setPaymentPerMonth] = useState(0)
    const [finalAmount, setFinalAmount] = useState(0)
    const getAmountF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setAmount(newValue);
        }
      };
      const getPeriodF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setPeriod(newValue);
        }
      };
      const getPercentageF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setPercentage(newValue);
        }
      };

      useEffect(()=>{
        setPaymentPerMonth(amount*(percentage/(12000*(1-(1+percentage/12000)**(-period)))))
        setFinalAmount(period * paymentPerMonth)
      },[amount | period | percentage])



  return (
    <div className='main-container'>

        <h2 className='text-3xl font-bold mt-20 mb-6'>Kredit kalkulyatoru</h2>

   <div className='credit-calculator flex web:flex-row mobile:flex-col '>
   <div className='credit-calculator-calculate web:w-3/5 mobile:w-full h-80'>
  
      <Box>
      <div className=' relative'>
      <div className='h-16 p-4 border-2 border-gri-600'>
     <Typography id="amount" gutterBottom >
        {amount}&nbsp;M
      </Typography>
     </div>
    <div className='absolute flex items-center  h-full w-full p-1 top-2'>
    <Slider
        size="medium"
        min={100}
        max={30000}
        defaultValue={1000}
        onChange={getAmountF}
        aria-label="Small"
      /> 
    </div>
    <div className='h-12 p-3 flex justify-between'><span>100</span><span>30000</span></div>
      </div>
    </Box>
   
    <Box>
    <div className='relative'>
    <div className='h-16 p-4 border-2 border-gri-600'>
     <Typography id="amount" gutterBottom >
     {period}&nbsp;Ay
      </Typography>
     </div>
    <div className='absolute flex items-center  h-full w-full p-1 top-2'>
    <Slider
        size="medium"
        min={1}
        max={60}
        defaultValue={6}
        onChange={getPeriodF}
        aria-label="Small"
      /> 
    </div>
    <div className='h-12 p-3 flex justify-between'><span>1</span><span>60</span></div>
    </div>
    
    </Box>
   
    <Box>
    <div className=' relative'>
      <div className='h-16 p-4 border-2 border-gri-600'>
     <Typography id="amount" gutterBottom >
        {percentage/10}&nbsp;%
      </Typography>
     </div>
    <div className='absolute flex items-center  h-full w-full p-1 top-2'>
    <Slider
        size="medium"
        min={119}
        max={269}
        defaultValue={130}
        onChange={getPercentageF}
        aria-label="Small"
      /> 
    </div>
    <div className='h-12 p-3 flex justify-between'><span>11.9</span><span>26.9</span></div>
      </div>
    </Box>
 
        </div>
        <div className='credit-calculator-result web:w-2/5 mobile:w-full web:h-80 flex flex-col justify-around'>
        <div className='mobile:flex web:ml-10'>
        <div className='mr-10 mb-10 mt-10'>
            <h2 className='text-4xl font-bold'>{paymentPerMonth.toFixed(2)}&nbsp;M</h2>
            <p>Aylıq ödəniş</p>
          </div>
          <div className='mb-10 mt-10'>
            <h2  className='text-4xl font-bold'>{finalAmount.toFixed()}&nbsp; M</h2>
            <p>Ümumi məbləğ</p>
          </div>
        </div>
          <div className='flex justify-center bg-blue-600 p-3 rounded-md web:w-1/3 web:m-10 mobile:w-full'><Link to={'/'}>Kredit alın</Link></div>


        </div>


   </div>
    </div>
  )
}

export default FerdiKreditKalkulyatoru