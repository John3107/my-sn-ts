import {ActionsType} from "./store";
import {PostsType} from "./profile-reduser";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type MessagesType = {
    id: number
    message: string
};
type DialogsType = {
    id: number
    name: string
};

export type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

}


let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Ann'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Peter'},
    ],

    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
    ],
    newMessageBody: ""
}

const messagesReducer = ( state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () =>
    ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body} as const)

export default messagesReducer;