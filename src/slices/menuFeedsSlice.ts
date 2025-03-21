import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const data = [
    { id: "all", title: "Все потоки" },
    { id: 1, title: "Спорт" },
    { id: 2, title: "Новости" },
    { id: 3, title: "Работа" },
];

type Item = {
    id: string | number;
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
        // addItem: (state, action: PayloadAction<Item>) => {
        // state.items ... 
        // },
        // removeItem: (state, action: PayloadAction<number>) => {
        // state.items ...
        // },
    },
})

// export const { addCategory, removeCategory } = categoriesSlice.actions

export default menuFeedsSlice.reducer