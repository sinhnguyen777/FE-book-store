import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../../api/userApi";
import StorageKeys from "../../../../redux/constants/storage-keys";


// const register = createAsyncThunk('users/register', async (payload) => {
//         const data = await userApi.Register(payload)

//         // localStorage.setItem(StorageKeys.TOKEN, data.token)
//         localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.data))
//         return data.user
//     }
// )
// const login = createAsyncThunk('users/login', async (payload) => {
//     const data = await userApi.Login(payload)
//     // localStorage.setItem(StorageKeys.TOKEN, data.token)
//     localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data))
//     return data.user
// }
// )
const userSlide = createSlice({
    name: 'users',
    initialState:{
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers:{},
    // extraReducers: {
    //     [register.fulfilled] : (state, action) => {
    //         state.current = action.payload
    //     }, 
    //     [login.fulfilled] : (state, action) => {
    //         state.current = action.payload
    //     }
    // },
});


const {reducer} = userSlide;
export default reducer; //default export
