import { configureStore } from '@reduxjs/toolkit';
import { SignupSlice } from './reducer/Signup.slice';
import { LoginSlice } from './reducer/Login.slice';
import { ForgetSlice } from './reducer/Forget.slice';
import { ResetPasswordSlice } from './reducer/ResetPassword.slice';
export const store = configureStore({
  reducer: {SignupSlice,LoginSlice,ForgetSlice,ResetPasswordSlice},
})