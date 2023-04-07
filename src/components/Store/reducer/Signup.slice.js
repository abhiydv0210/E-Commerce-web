import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: ""
}
export const SignupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setFirstname: (state, action) => {
            state.firstName = action.payload;
        },
        setLastname: (state, action) => {
            state.lastName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setConfirmpassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        clear: (state) => {
            state.firstName = ""
            state.lastName = ""
            state.email = ""
            state.password = ""
            state.confirmPassword = ""
            
        }
    },
})

export const { setFirstname,setLastname,setPassword,setConfirmpassword,setEmail,clear } = SignupSlice.actions;

export default SignupSlice.reducer; 