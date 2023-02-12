const ADD_MESSAGE = 'ADD-MESSAGE'
const CURRENT_TEXT_MESSAGE = 'CURRENT_TEXT_MESSAGE'

export const addMessageCreator = ()=>{
    return {type: ADD_MESSAGE}
}
export const currentTextMessageCreator = (text)=>{
    return{type: CURRENT_TEXT_MESSAGE, text:text}
}

const reducerDialogs = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: 6
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case CURRENT_TEXT_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default: return state;
    }
}

export default reducerDialogs