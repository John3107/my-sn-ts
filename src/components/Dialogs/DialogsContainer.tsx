import React from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator}
    from "../../redux/messages-reduser";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    messagesPage: InitialStateType
}

type MapDispatchPropsType = {
    updateNewMessageBody: () => void
    sendMessage: (body?: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    messagesPage: state.messagesPage
})

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body?: string) => {
            dispatch(updateNewMessageBodyCreator(body || ''));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);