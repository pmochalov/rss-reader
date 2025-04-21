import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type AuthState = {
    token: null | string,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined,
}

type AuthData = {
    token: string
}

const initialState: AuthState = {
    token: null,
    status: 'idle',
    error: undefined,
}

export const fetchToken = createAsyncThunk('auth/fetchToken', async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_API}auth/fetch_token`);
    const data = (await response.json()) as AuthData;

    return data.token;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToken.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(fetchToken.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export default authSlice.reducer;