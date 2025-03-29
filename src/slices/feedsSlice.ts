import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Feed } from '../@types';

const data: Feed[] = [];

type FeedsState = {
    data: Feed[]
}

const initialState: FeedsState = {
    data: [...data]
}

export const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        addFeed: (state, action: PayloadAction<Feed>) => {
            state.data = [...state.data, action.payload];
        },
        resetFeed: () => initialState
        // removeItem: (state, action: PayloadAction<number>) => {
        // state.items ...
        // },
    },
})

export const { addFeed, resetFeed } = feedsSlice.actions;

export default feedsSlice.reducer;