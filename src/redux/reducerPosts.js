//Action Type
const ADD_POST = 'ADD-POST'
const CURRENT_TEXT_POST = 'CURRENT-TEXT-POST'

//Action Creator
export const addPostCreator = () => {
    return {type: ADD_POST}
}
export const currentTextPostCreator = (text) => {
    return {type: CURRENT_TEXT_POST, text: text}
}

//Starting value state
let initialState = {
    posts: [
        {message: 'Hi, how are you?', like: 15, id: 1},
        {message: 'Happy birthday!!!', like: 15, id: 2},
        {message: 'It`s my first post', like: 3, id: 3},
    ],
    newPostText: '',
}

//Reducer
const reducerPosts = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                like: 0,
                id: 4,
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case CURRENT_TEXT_POST:
            state.newPostText = action.text
            return state
        default:
            return state
    }

}

export default reducerPosts