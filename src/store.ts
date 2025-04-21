import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import categoriesReducer from './slices/categoriesSlice'

import { categoryApi } from './api/category';
import { feedApi } from './api/feed';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [feedApi.reducerPath]: feedApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware).concat(feedApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;