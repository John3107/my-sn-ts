import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>


const authReducer = (state: initialStateType = initialState, action: setAuthUserDataType): initialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: 'SET-AUTH-USER-DATA', data: {id, login, email}} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
}


export default authReducer;