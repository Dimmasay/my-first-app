//Action Type
const ADD_MESSAGE = 'ADD-MESSAGE'
const CURRENT_TEXT_MESSAGE = 'CURRENT_TEXT_MESSAGE'


//Action Creator
export const addMessageCreator = () => {
    return {type: ADD_MESSAGE}
}
export const currentTextMessageCreator = (text) => {
    return {type: CURRENT_TEXT_MESSAGE, text: text}
}


//Starting value state
let initialState = {
    dialogs: [
        {
            name: 'Dima',
            id: 1,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'
        },
        {
            name: 'Tanya',
            id: 2,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'
        },
        {
            name: 'Kostya',
            id: 3,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'
        },
        {
            name: 'Sergiy',
            id: 4,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'
        },
        {
            name: 'Larisa',
            id: 5,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'
        },
        {
            name: 'Nadya',
            id: 5,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'
        },
    ],
    messages: [
        {message: 'Hello, how are you?', id: 1},
        {message: 'I`m hungry', id: 2},
        {message: 'Happy Birthday', id: 3},
        {message: 'Yo', id: 4},
        {message: 'ok?', id: 5},
    ],
    newMessageText: '',
}

//Reducer
const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: state.newMessageText,
                id: 6
            };
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case CURRENT_TEXT_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default reducerDialogs