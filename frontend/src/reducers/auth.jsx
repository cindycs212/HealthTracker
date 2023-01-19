import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
} from '../actions/types'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
}

export const auth = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
            localStorage.setItem('access', action.payload.access)
            return {
                ...state,
                isAuthenticated: true,
                access: action.payload.access,
                refresh: action.payload.refresh,
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case LOGIN_FAIL:
        case GOOGLE_AUTH_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

export default auth

