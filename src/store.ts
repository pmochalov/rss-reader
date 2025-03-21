import { configureStore } from '@reduxjs/toolkit'
import menuFeedsReducer from './slices/menuFeedsSlice'

export const store = configureStore({
    reducer: {
        menufeeds: menuFeedsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;