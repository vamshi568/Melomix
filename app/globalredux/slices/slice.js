"use client";
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: '',
  },
  reducers: {
    increment: (state,action) => {
      state.value = action.payload 
    },
  },
})


export const navsetting=createSlice({
  name:'navsetting',
  initialState:{
    value: 0,
},
  reducers:{
    activesong:(state,action)=>{
      state.value=action.payload
    }, 
  }
})

export const playlistid = createSlice({
  name: 'playlistid',
  initialState: {
    value: '',
  },
  reducers: {
    addaonsdid: (state,action) => {
      state.value = action.payload 
    },
  },
})
export const moodid = createSlice({
  name: 'moodid',
  initialState: {
    value: '',
  },
  reducers: {
    addplaylistid: (state,action) => {
      state.value = action.payload 
    },
  },
})
export const { increment} = counterSlice.actions
export const { activesong } = navsetting.actions
export const { addaonsdid } = playlistid.actions
export const { addplaylistid } = moodid.actions

export default {counter:counterSlice.reducer,navigation:navsetting.reducer,playlistid:playlistid.reducer,moodid:moodid.reducer}