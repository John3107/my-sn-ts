import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import messagesReducer from "./messages-reduser";
import navbarReducer from "./navbar-reduser";
import {ActionsType, StateType} from "./store";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';

export type StoreType = {
    getState: () => StateType
    _state: StateType
    _callSubscriber: (_state?: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    users: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



