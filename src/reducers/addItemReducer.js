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
            if(state[action.payload] === 0){
                console.log("remove")
                let neObj = {...state}
                delete neObj[action.payload]
                return neObj
                
           }
            if(!state[action.payload])return state
            if (state[action.payload] > 0){
                return {...state, [action.payload]: state[action.payload] - 1}
            } 
           
              
            break;
        default: 
            return state
    }
}
