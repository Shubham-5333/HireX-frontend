import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../features/authSlice.js'
import JobsReducer from '../features/jobSlice.js'

export const store = configureStore({
    reducer:{
        authentication:AuthReducer,
        jobs:JobsReducer
    }
})