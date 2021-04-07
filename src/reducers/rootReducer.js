import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import addItemReducer from './addItemReducer';


const rootReducer = combineReducers({ items: itemsReducer, addItem: addItemReducer})

export default rootReducer;