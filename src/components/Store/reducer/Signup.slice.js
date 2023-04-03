import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    confirmpassword: ""
}
export const SignupSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstname: (state, action) => {
            state.firstname = action.payload;
        },
        setLastname: (state, action) => {
            state.lastname = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setConfirmpassword: (state, action) => {
            state.confirmpassword = action.payload;
        },
        clear: (state) => {
            state.firstname = ""
            state.lastname = ""
            state.email = ""
            state.password = ""
            state.confirmpassword = ""
            
        }
    },
})

export const { setFirstname,setLastname,setPassword,setConfirmpassword,setEmail,clear } = SignupSlice.actions;

export default SignupSlice.reducer; 