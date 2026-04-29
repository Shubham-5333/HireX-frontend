import { createSlice } from '@reduxjs/toolkit'

const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        jobs:[]
    },
    reducers:{
        setJobs:(state,action)=>{
            state.jobs = action.payload;
        },
        postJobs:(state,action)=>{
            state.jobs.push(action.payload)
        }
    }
})

export const {setJobs,postJobs} = jobSlice.actions;
export default jobSlice.reducer