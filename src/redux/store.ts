import { configureStore } from '@reduxjs/toolkit';
import quizzesReducer from './features/quizzesSlice';

export const store = configureStore({
  reducer: {
    quizzesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
