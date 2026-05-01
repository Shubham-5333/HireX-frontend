import { createSlice } from '@reduxjs/toolkit'

const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        jobs:[],
        appliedJobs:[]
        
    },
    reducers:{
        
        findJobs:(state,action)=>{
            console.log("reached findjob");
            
            state.jobs = action.payload;
        },
        postJobs:(state,action)=>{
            state.jobs.push(action.payload)
        },
        applyJobs:(state,action)=>{
            state.appliedJobs.push(action.payload)
        }

    }
})

export const {findJobs,postJobs,applyJobs} = jobSlice.actions;
export default jobSlice.reducer