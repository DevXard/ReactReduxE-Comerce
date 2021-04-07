const INITIAL_VALUE = {}

export default function items(state=INITIAL_VALUE, action){
    // console.log(state)
    switch(action.type){
        case "ADD_ITEM":
            if(!state[action.payload]){
                return {...state, [action.payload]: 1}
            } 
            return {...state, [action.payload]: state[action.payload] + 1}
        case "REMOVE_ITEM":
            if (state[action.payload] !== 1){
                return {...state, [action.payload]: state[action.payload] - 1}
            }
            if(state[action.payload] === 1){
                
                let neObj = {...state}
                delete neObj[action.payload]
                return neObj
                
           }
            if(!state[action.payload])return state
            
           break;
        default: 
            return state
    }
}
