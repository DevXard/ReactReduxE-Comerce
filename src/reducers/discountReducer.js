
export default function discount(state=0, action){
    console.log(action);
    switch(action.type){
        case "RESET":
            return {code: '', percent: 0}
        case "REMOVE10":
            return {code: "REMOVE10", percent: 0.1}
        case "REMOVE20":
            return {code: "REMOVE20", percent: 0.2}
        case "REMOVE30":
            return {code: "REMOVE30", percent: 0.3}
        default:
            return state
    }
}