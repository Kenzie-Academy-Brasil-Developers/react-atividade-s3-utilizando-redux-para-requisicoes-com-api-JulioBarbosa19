import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = [], action) => {
    switch (action.type){
        case ADD_DIGIMONS:
            const {payload} = action;
            return [...state, payload];
        
        default:
         return state
    }
}

export default digimonsReducer;