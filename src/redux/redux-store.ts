import {combineReducers, createStore} from "redux";
import profileReducer, {} from "./profile-reduser";
import messagesReducer from "./messages-reduser";
import navbarReducer from "./navbar-reduser";
import {StoreType} from "./store";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer
})

export const store: StoreType = createStore(reducers)



