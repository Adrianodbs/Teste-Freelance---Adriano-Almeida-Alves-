import { createSlice } from '@reduxjs/toolkit';
import { MenuState, ProductState } from './types';


const initialState: ProductState & MenuState = {
  productOpen: false,
  menuOpen: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleProduct: (state) => {
      state.productOpen = !state.productOpen;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleProduct, toggleMenu } = productSlice.actions;
export default productSlice.reducer;
