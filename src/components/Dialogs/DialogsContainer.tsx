import React, {MouseEvent} from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator}
    from "../../redux/messages-reduser";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
    messagesPage: InitialStateType
}

type mapDispatchPropsType = {
    updateNewMessageBody: () => void
    sendMessage: (body?: string) => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body?: string) => {
            dispatch(updateNewMessageBodyCreator(body || ''));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
