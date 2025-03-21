import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const data = [
    { title: "Спорт" },
    { title: "Новости" },
    { title: "Работа" },
]

type Item = {
    title: string
}

type CategoriesState = {
    items: Item[]
}

const initialState: CategoriesState = {
    items: [...data]
}

export const menuSlice = createSlice({
    name: 'menu',
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

export default menuSlice.reducer