import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducer';
import thunk from 'redux-thunk';

// Create the Redux store
export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});
