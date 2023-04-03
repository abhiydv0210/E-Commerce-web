import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    email: "",
    password: "",

}
export const LoginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {


        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        clear: (state) => {

            state.email = ""
            state.password = ""


        }
    },
})

export const { setPassword, setEmail, clear } = LoginSlice.actions;

export default LoginSlice.reducer; 