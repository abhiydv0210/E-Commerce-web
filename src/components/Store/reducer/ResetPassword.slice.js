import { createSlice } from "@reduxjs/toolkit"

const initialState = {
 
    password: "",
    confirmpassword: "",
    
}
export const ResetPasswordSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.email = action.payload;
        },
        
        clear: (state) => {
            
            state.confirmpassword= ""
            state.password = ""
            
            
        }
    },
})

export const { password,confirmpassword,clear } = ResetPasswordSlice.actions;

export default ResetPasswordSlice.reducer; 