import data from '../data.json'
const INITIAL_VALUE = data

export default function items(state=INITIAL_VALUE, action){
    return state
}


// switch(action.type){
//     case "ADD_ITEM":
//         return [...state, action.payload]
//     case "REMOVE_ITEM":
//         return state.filter(data => 
//         data.id !== action.payload.id)
//     default:
//         return state
// }