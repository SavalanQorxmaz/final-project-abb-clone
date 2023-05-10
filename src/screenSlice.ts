
import {createSlice} from '@reduxjs/toolkit'

interface screenType {
    screenW: 'web' | 'mobile',
    scrollTop: number
}

const initialState:screenType = {
    screenW: 'web',
    scrollTop: 0
}

const screenSlice = createSlice({
    name: 'screenPosition',
    initialState,
    reducers: {
  screenW: (state, actions) => {
    if(actions.payload > 1000){
        state.screenW = 'web'
        // console.log(actions.payload)
        // console.log(state.screenW)
    }
    else{
       state.screenW = 'mobile'
      //  console.log(actions.payload)
      //  console.log(state.screenW)
  }
    
  },
  scrollTop: (state, action) => {
state.scrollTop = action.payload
  }
}
})


export const selectScreenW = (state:{screenPosition:{screenW: 'web' | 'mobile'}}) => state.screenPosition.screenW;
export const selectScrollTop = (state:{screenPosition:{scrollTop:number}}) => state.screenPosition.scrollTop

export const {screenW, scrollTop} =screenSlice.actions

export default screenSlice.reducer