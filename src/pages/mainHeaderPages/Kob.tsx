import React from 'react'
import Slider from '../../components/Slider'
import KobStaticSlider from '../pageSections/KobStaticSlider'
import KobBiznesKreditleri from '../pageSections/KobBiznesKreditleri'
import KobSenedliEmeliyyatlar from '../pageSections/KobSenedliEmeliyyatlar'
import KobDigerEmeliyyatlar from '../pageSections/KobDigerEmeliyyatlar'
const Kob = () => {
  return (
    <div>
      
<Slider/>

<KobStaticSlider/>
<KobBiznesKreditleri/>
<KobSenedliEmeliyyatlar/>
<KobDigerEmeliyyatlar/>
    </div>
  )
}

export default Kob