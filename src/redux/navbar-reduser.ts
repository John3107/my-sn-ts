import {ActionsType, FriendsType} from "./store";

export type initialStateType = {
    friends: Array<FriendsType>
}


export let initialState: initialStateType = {
    friends: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Michael'}
    ],
}

const navbarReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    return state;
}

export default navbarReducer;