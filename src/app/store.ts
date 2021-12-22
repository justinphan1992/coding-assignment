import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as userReducer } from 'src/features/user';

export const rootReducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
