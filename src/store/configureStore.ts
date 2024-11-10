import {combineReducers} from 'redux';
import reducers from './reducer';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  reducer: reducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
export default store;
