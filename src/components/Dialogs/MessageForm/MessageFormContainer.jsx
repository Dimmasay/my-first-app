import React from "react";
import {addMessageCreator, currentTextMessageCreator} from "../../../redux/reducerDialogs";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        stateDialogs: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        changeTextBody: (text) => {
            dispatch(currentTextMessageCreator(text))
        },
    }
}

const MessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageForm)

export default MessageFormContainer