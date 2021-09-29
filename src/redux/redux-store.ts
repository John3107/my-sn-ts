import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import messagesReducer from "./messages-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {ActionsType} from "./store";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export type ThunkType<ReturnType = void> = ThunkAction<void, AppStateType, unknown, ActionsType>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



