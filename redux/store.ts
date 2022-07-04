import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import discoveryReducer from './slicers/discoverySlice'

export const store = configureStore({
  reducer: {
    discovery: discoveryReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;