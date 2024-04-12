import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { signIn } from "../../services/auth/userAuth";


export const login = createAsyncThunk(
    'auth/login', async (userData, thunkApi) => {
        const response = await signIn(userData);
        return response
    }
)

const initialState = {
    user: {},
    loading: false,

}

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false
            console.log('đăng nhập thành công')

        })
        buider.addCase(login.pending, (state, action) => {
            state.loading = true
            console.log('đang đăng nhâp')
        })
        buider.addCase(login.rejected, (state, action) => {
            state.loading = false
            console.log('đăng nhập fail')
            
        })
    }
})


export default signInSlice.reducer