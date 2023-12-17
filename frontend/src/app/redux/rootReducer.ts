import { combineReducers } from 'redux';
import productReducer from './productSlice'; 

const rootReducer = combineReducers({
  product: productReducer,

});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;