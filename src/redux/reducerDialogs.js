//Action Type
const ADD_MESSAGE = 'ADD_MESSAGE'


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
}

//Reducer
const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    message: action.message,
                    id: 6
                }]
            }
        default:
            return state;
    }
}

//Action Creator
export const addMessageAC = (text) => ({type: ADD_MESSAGE, message: text})

export default reducerDialogs