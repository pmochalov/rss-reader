import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const data = [
    { id: 1, title: "Спорт" },
    { id: 2, title: "Новости" },
    { id: 3, title: "Работа" },
];

type Item = {
    id: number;
    title: string
}

type CategoriesState = {
    items: Item[]
}

const initialState: CategoriesState = {
    items: [...data]
}

export const menuFeedsSlice = createSlice({
    name: 'menufeeds',
    initialState,
    reducers: {
        addFeedItem: (state, action: PayloadAction<Item>) => {
            state.items = [...state.items, action.payload];
        },
        // removeItem: (state, action: PayloadAction<number>) => {
        // state.items ...
        // },
    },
})

export const { addFeedItem } = menuFeedsSlice.actions;

export default menuFeedsSlice.reducer;