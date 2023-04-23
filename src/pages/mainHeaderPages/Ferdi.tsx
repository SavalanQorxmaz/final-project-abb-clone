import React from 'react'
import {useSelector} from 'react-redux'
import { selectScreenW, selectScrollTop } from '../../screenSlice'

const Ferdi = () => {

  const s =useSelector(selectScreenW)
  const st = useSelector(selectScrollTop)
  return (
    <div style={{height: '5000px'}} className=' bg-slate-500 relative top-48 '>
         <h1 className="text-3xl font-bold underline">
    {s} {st}
  </h1>
    </div>
  )
}

export default Ferdi