import React from 'react';
import s from './../Dialogs.module.css'

export type MessageType = {
    message: string | undefined
}

const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message;
