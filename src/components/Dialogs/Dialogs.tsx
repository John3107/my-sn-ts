import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType}
    from "../../redux/store";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: MessagesPageType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
