
import { ProductState, ToggleProductAction } from './types';

export type ProductActionTypes = ToggleProductAction;

const initialState: ProductState = {
  productOpen: false,
};

const productReducer = (state: ProductState = initialState, action: ProductActionTypes): ProductState => {
  switch (action.type) {
    case 'TOGGLE_PRODUCT':
      return { ...state, productOpen: !state.productOpen };
    default:
      return state;
  }
};

export const toggleProduct = (): ToggleProductAction => ({
  type: 'TOGGLE_PRODUCT',
});

export default productReducer;