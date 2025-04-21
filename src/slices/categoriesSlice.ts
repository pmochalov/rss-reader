import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Category } from '../@types';

type CategoriesState = {
    current: Category["id"] | null;
    items: Category[]
}

const initialState: CategoriesState = {
    current: null,
    items: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategoryToSlice: (state, action: PayloadAction<Category>) => {
            state.items = [...state.items, action.payload];
        },
        setCurrentSection: (state, action: PayloadAction<Category["id"] | null>) => {
            state.current = action.payload;
        },
    },
})

export const { addCategoryToSlice, setCurrentSection } = categoriesSlice.actions;

export default categoriesSlice.reducer;