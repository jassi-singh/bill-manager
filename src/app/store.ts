import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import billReducer from '../features/bill/billSlice';

export const store = configureStore({
  reducer: {
    bill: billReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
