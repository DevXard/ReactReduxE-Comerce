
export default function discount(state=0, action){
    console.log(action);
    switch(action.type){
        case "REMOVE10":
            return action.payload - (action.payload * 0.1)
        case "REMOVE20":
            return action.payload - (action.payload * 0.2)
        case "REMOVE30":
            return action.payload - (action.payload * 0.3)
        default:
            return state
    }
}