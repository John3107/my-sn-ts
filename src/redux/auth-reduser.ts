import {authAPI} from "../api/api";
import {ActionsType} from "./store";
import {AppStateType, ThunkType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";


type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean) =>
    ({type: 'SET-AUTH-USER-DATA',
        payload: {userId, email, login, isAuth}}as const)

export const getAuthUserData = () =>
    (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
    return authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) =>
     (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = (): ThunkType =>
    (dispatch) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export default authReducer;