import {getAuthUserData} from "./auth-reduser";
import {ActionsType} from "./store";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {FormAction} from "redux-form";


type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}


const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })

}



export default appReducer;