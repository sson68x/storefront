import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './categories';
import productReducer from './products';

let reducers = combineReducers({
  categoriesRed: categoryReducer,
  productsRed: productReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}