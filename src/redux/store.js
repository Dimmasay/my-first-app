//Action Type
import reducerDialogs from "./reducerDialogs";
import reducerPosts from "./reducerPosts";
import reducerNavbar from "./reducerNavbar";




let store = {
    _rerenderEntireThree() {
        console.log('state changed')
    },

    _state: {
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
            newMessageText: '',
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
    },


    getState() {
        return this._state
    },

    dispatch(action){
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action);
        this._state.postsPage = reducerPosts(this._state.postsPage, action);
        this._state.friends = reducerNavbar(this._state.friends, action);

        this._rerenderEntireThree(this._state)
    },

    subscribe(render) {
        this._rerenderEntireThree = render
    },
}


export default store