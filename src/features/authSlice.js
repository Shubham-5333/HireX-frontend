import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authenctication',
    initialState: {
        user:null,
        isAuthenticated:false
    },
    reducers: {
        registerUser: (state, action) => {
            console.log("Reached redux register");
            
           state.user = action.payload
           state.isAuthenticated = true
        },
        loginUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            localStorage.setItem('isLoggedIn','true')
        },
        logoutUser:(state,action)=>{
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { registerUser, loginUser,logoutUser } = authSlice.actions
export default authSlice.reducer