import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    email: "",
    otp:""
}
export const ForgetSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setOTP: (state, action) => {
            state.otp = action.payload;
        },
        clear: (state) => {
            
            state.email = ""
            state.otp = ""
            
            
        }
    },
})

export const { setEmail,setOTP,clear } = ForgetSlice.actions;

export default ForgetSlice.reducer; 