import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator}
    from "../../redux/messages-reduser";
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer = (props: any) => {
    return <StoreContext.Consumer>
        { store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().messagesPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;
