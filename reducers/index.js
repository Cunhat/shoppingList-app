import ShoppingListsReducer from './ShoppingListsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    shoppingListsReducer: ShoppingListsReducer
});

export default allReducers;