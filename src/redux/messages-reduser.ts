import {ActionsType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'

type MessagesType = {
    id: number
    message: string | undefined
};
type DialogsType = {
    id: number
    name: string
};

export type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

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
}

const messagesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody: string | undefined) =>
    ({type: SEND_MESSAGE, newMessageBody} as const)


export default messagesReducer;
