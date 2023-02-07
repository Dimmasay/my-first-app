import {rerenderEntireThree} from "../render";

let state = {
    dialogsPage: {
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
        newMessageText: 'qwert',
    },
    postsPage: {
        posts: [
            {message: 'Hi, how are you?', like: 15, id: 1},
            {message: 'Happy birthday!!!', like: 15, id: 2},
            {message: 'It`s my first post', like: 3, id: 3},
        ],
        newPostText: '',
    },
    friends: [
        {
            name: 'Tanya',
            surname: 'Kruhliak',
            id: 1,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'
        },
        {
            name: 'Sergiy',
            surname: 'Kruhliak',
            id: 2,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'
        },
        {
            name: 'Larisa',
            surname: 'Kruhliak',
            id: 3,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'
        },
    ]
}

export const addPost = (postText) => {

    let newPost = {
        message: state.postsPage.newPostText,
        like: 0,
        id: 4,
    };
    state.postsPage.posts.push(newPost)
    state.postsPage.newPostText = ''
    rerenderEntireThree(state)

}

export const currentTextPost = (text) => {
    state.postsPage.newPostText = text
    rerenderEntireThree(state)

}


export const addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
        id: 6
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireThree(state)

};

export const currentTextMessage = (text) => {
    state.dialogsPage.newMessageText = text
    rerenderEntireThree(state)

}


export default state