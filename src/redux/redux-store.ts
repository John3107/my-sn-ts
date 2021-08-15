import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import messagesReducer from "./messages-reduser";
import navbarReducer from "./navbar-reduser";
import {ActionsType, StateType} from "./store";

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
    navbarPage: navbarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)



