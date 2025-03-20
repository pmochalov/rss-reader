import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

const data = [
    { title: "Какой-то заголовок" }
]

type Category = {
    title: string
}

type CategoriesState = {
    items: Category[]
}

const initialState: CategoriesState = {
    items: [...data]
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // addCategory: (state, action: PayloadAction<Category>) => {
        // state.items ... 
        // },
        // removeCategory: (state, action: PayloadAction<number>) => {
        // state.items ...
        // },
    },
})

// export const { addCategory, removeCategory } = categoriesSlice.actions

export default categoriesSlice.reducer