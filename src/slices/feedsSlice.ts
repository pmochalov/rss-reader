import { createSlice } from '@reduxjs/toolkit'

const data = [
    { categoryId: null, url: "http://ilyabirman.ru/meanwhile/rss/" },
    { categoryId: 2, url: "https://habr.com/ru/rss" },
];

type Item = {
    categoryId: number | null;
    url: string
}

type FeedsState = {
    items: Item[]
}

const initialState: FeedsState = {
    items: [...data]
}

export const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        // addFeedItem: (state, action: PayloadAction<Item>) => {
        //     state.items = [...state.items, action.payload];
        // },
        // removeItem: (state, action: PayloadAction<number>) => {
        // state.items ...
        // },
    },
})

// export const { addFeedItem } = feedsSlice.actions;

export default feedsSlice.reducer;