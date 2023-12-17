import { Action } from 'redux';

export interface ProductState {
  productOpen: boolean;
}

export interface MenuState {
  menuOpen: boolean;
}
export interface RootState {
  product: ProductState;
}

export interface ToggleProductAction extends Action {
  type: 'TOGGLE_PRODUCT';
}

