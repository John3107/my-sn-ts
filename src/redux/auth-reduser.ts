import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ActionsType} from "./store";
import {Simulate} from "react-dom/test-utils";


type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'SET-AUTH-USER-DATA', payload: {id, login, email, isAuth}} as const)

export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData());
            }
        })
}

export const logout = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export default authReducer;