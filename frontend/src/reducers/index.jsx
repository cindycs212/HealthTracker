import { combineReducers } from "redux";
import auth from './auth'
import cycles from './cycles'

const rootReducer = combineReducers({
    auth,
    cycles,
})

export default rootReducer
