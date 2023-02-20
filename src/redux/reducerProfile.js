//Action Type
const ADD_POST = 'ADD_POST'
const CURRENT_TEXT_POST = 'CURRENT_TEXT_POST'
const SET_USER = 'SET_USER'


//Starting value state
let initialState = {
    user: null,
    posts: [
        {message: 'Hi, how are you?', like: 15, id: 1},
        {message: 'Happy birthday!!!', like: 15, id: 2},
        {message: 'It`s my first post', like: 3, id: 3},
    ],
    newPostText: '',
}

//Reducer
const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                like: 0,
                id: 4,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case CURRENT_TEXT_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        case SET_USER:
            return {...state, user:  action.currentUser}

        default:
            return state
    }
}

//Action Creator
export const addPostCreator = () => {
    return {type: ADD_POST}
}
export const currentTextPostCreator = (text) => {
    return {type: CURRENT_TEXT_POST, text: text}
}
export const setUserProfileAC = (user) => {
    return {type: SET_USER, currentUser: user}
}


export default reducerProfile