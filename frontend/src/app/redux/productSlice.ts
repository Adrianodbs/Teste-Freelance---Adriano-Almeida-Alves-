import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from './types';


const initialState: ProductState = {
  productOpen: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleProduct: (state) => {
      state.productOpen = !state.productOpen;
    },
  },
});

export const { toggleProduct } = productSlice.actions;
export default productSlice.reducer;
