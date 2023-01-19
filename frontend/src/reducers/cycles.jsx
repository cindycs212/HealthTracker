import { 
    GET_CYCLE_SUCCESS,
    GET_CYCLE_FAIL,
    ADD_CYCLE_SUCCESS,
    ADD_CYCLE_FAIL,
    DELETE_CYCLE_SUCCESS,
    DELETE_CYCLE_FAIL,
 } from "../actions/types";

const initialState = {
    cycles: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_CYCLE_SUCCESS:
            return {
                ...state,
                cycles: action.payload
            }
        case GET_CYCLE_FAIL:
            return {}
        case ADD_CYCLE_SUCCESS:
            return {
                ...state,
                cycles: [...state.cycles, action.payload]
            }
        case ADD_CYCLE_FAIL:
            return state
        case DELETE_CYCLE_SUCCESS:
            return {
                ...state,
                cycles: state.cycles.filter(cycle => cycle.id !== action.payload)
            }
        case DELETE_CYCLE_FAIL:
            return state
        default:
            return state
    }
}