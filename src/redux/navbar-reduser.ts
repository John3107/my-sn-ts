import {ActionsType, NavbarPageType} from "./store";

export let initialState = {
    friends: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Michael'}
    ],
}

const navbarReducer = (state: NavbarPageType = initialState, action: ActionsType) => {

    return state;
}

export default navbarReducer;