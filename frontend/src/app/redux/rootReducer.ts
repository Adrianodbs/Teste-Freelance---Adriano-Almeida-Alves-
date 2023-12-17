import { combineReducers } from 'redux';
import productSlice from './productSlice';

const rootReducer = combineReducers({
  product: productSlice,

});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;