import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType}
    from "../../redux/messages-reduser";
import AddMessageForm from "./AddMessageForm";

export type FormDataType = {
    newMessageBody: string
}

type DialogsPropsType = {
    sendMessage: (body: string) => void
    messagesPage: InitialStateType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;
