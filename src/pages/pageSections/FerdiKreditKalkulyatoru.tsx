import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { purple } from '@mui/material/colors';

import Typography from '@mui/material/Typography';
import { Value } from 'sass';

const FerdiKreditKalkulyatoru = () => {

    const [amount, setAmount] = useState(1000)
    const [period, setPeriod] = useState(6)
    const [percentage, setPercentage] = useState(13)
    const getAmountF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setAmount(newValue);
          console.log(amount)
        }
      };
      const getPeriodF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setPeriod(newValue);
          console.log(amount)
        }
      };
      const getPercentageF = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
          setPercentage(newValue);
          console.log(amount)
        }
      };

  return (
    <div className='main-container'>

        <h2 className='text-2xl font-bold mt-5 mb-5'></h2>

        <div>
      <div className=' relative'>
        <div className='border-4 border-rose-250 border-b-0 absolute bottom-1/3 w-full h-3/4'></div>
      <Box>
           <Typography id="amount" gutterBottom>
        {amount}&nbsp;M
      </Typography>
           <Slider
        size="medium"
        min={100}
        max={30000}
        defaultValue={1000}
        onChange={getAmountF}
        aria-label="Small"
        valueLabelDisplay="auto"
        color = {'primary'}
      /> 
    
    </Box>
      </div>

    <Box>
           <Typography id="period" gutterBottom>
        {period}&nbsp;Ay
      </Typography>
           <Slider
        size="medium"
        min={1}
        max={60}
        defaultValue={6}
        onChange={getPeriodF}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> 
    
    </Box>

    <Box>
           <Typography id="percentage" gutterBottom>
        {percentage/10}&nbsp;%
      </Typography>
           <Slider
        size="medium"
        min={119}
        max={269}
        defaultValue={130}
        onChange={getPercentageF}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> 
    
    </Box>
        </div>
    </div>
  )
}

export default FerdiKreditKalkulyatoru