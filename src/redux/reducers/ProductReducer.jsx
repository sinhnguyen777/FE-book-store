import {  GET_PRODUCTBYID } from "../constants";

const initalState = {
    
    data: []
}

const ProductReducers = (state = initalState, payload) => {
    switch (payload.type) {
        case GET_PRODUCTBYID:
            return {
                ...state,
                data: payload.data
            };
        
        default:
            return state;
    }
}

export default ProductReducers;
