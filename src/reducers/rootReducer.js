import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import addItemReducer from './addItemReducer';
import duscountReducer from './discountReducer';


const rootReducer = combineReducers({ 
    items: itemsReducer, 
    addItem: addItemReducer,
    discount: duscountReducer
})

export default rootReducer;