import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'Auth',
    initialState: { token: null },
    reducers: {
        setCredentails: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logout: (state, action) => {
            state.token = null
        }

    }
})

export const { setCredentails, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token